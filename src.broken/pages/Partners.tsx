import React from 'react',
export default Partners,

import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react'
import { useState, useEffect } from "react",
import { useTranslation } from 'react-i18next',
import Link from 'next/link',
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",
import { useAuth } from "@/hooks/useAuth",
import { useRouter } from 'next/router',
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',

export default function Partners() {

  logInfo('PartnersPage rendering'),
  const [activeTab, setActiveTab] = useState("overview"),
  const { t } = useTranslation(),
  const { user, isAuthenticated } = useAuth(),
  const router = useRouter(),
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true),

  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch('/api/auth/health'),
        setAuthServiceAvailable(res.ok),
      } catch (err) {
        logErrorToProduction('Partner login auth health check failed', { data: err }),
        setAuthServiceAvailable(false),
      }
    }
    checkHealth(),
  }, []),

  // If not authenticated, display partner program info and signup CTA
  if (!isAuthenticated) {
    logInfo('PartnersPage rendering Unauthenticated View'),
    return (
      <div className="container max-w-6xl py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{t('partner.title')}</h1>
          <p className="text-xl text-zion-slate-light">{t('partner.subtitle')}</p>
        </div>

        <div className="grid grid - cols - 1 md: grid - cols - 2 lg:grid - cols - 3 gap-8">
          <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
            <h3 className="text-xl font - bold text-white mb-4">
              Technology Partners
            </h3>
            <p className="text-gray -300">
              Leading technology companies that provide cutting - edge solutions
              and infrastructure.</p>
          </div>

          <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
            <h3 className="text-xl font - bold text-white mb-4">
              Consulting Partners
            </h3>
            <p className="text-gray -300">
              Expert consulting firms that help us deliver comprehensive
              business solutions.</p>
          </div>

          <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
            <h3 className="text-xl font - bold text-white mb-4">
              Industry Partners
            </h3>
            <p className="text-gray -300">
              Industry leaders across various sectors who share our vision for
              digital transformation.</p>
          </div>
        </div>
      </div>
    </div>) 
},
