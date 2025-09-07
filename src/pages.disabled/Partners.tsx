Card,
  CardContent,
  CardDescription,
  CardHeader,;
  CardTitle;

} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PartnerRegistrationForm } from '@/components/partners/PartnerRegistrationForm';
import { PartnerReferralLinks } from '@/components/partners/PartnerReferralLinks';
import { PartnerDashboard } from '@/components/partners/PartnerDashboard';
import { PartnerLeaderboard } from '@/components/partners/PartnerLeaderboard';
import { PartnerResources } from '@/components/partners/PartnerResources';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs","
import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react''
import { useState, useEffect } from "react","
import { useTranslation } from 'react-i18next','
import Link from 'next/link','
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm","
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks","
import { PartnerDashboard } from "@/components/partners/PartnerDashboard","
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard","
import { PartnerResources } from "@/components/partners/PartnerResources","
import { useAuth } from "@/hooks/useAuth","
import { useRouter } from 'next/router','
import { logInfo, logErrorToProduction } from '@/utils/productionLogger','
export default function Partners() {;
  logInfo('PartnersPage rendering');,



import { CheckCircle, FileDown, FileText, PieChart, Users } from 'lucide-react'
import { useState, useEffect } from "react",;
import { useTranslation } from 'react-i18next',;

  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch('/api/auth/health');
setAuthServiceAvailable(res.ok);
      } catch (err) {
import { useState, useEffect } from "react";
import { useTranslation  } from 'react-i18next';
origin/cursor/automate-test-improve-and-merge-code-2533
import Link from 'next/link',;
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",;
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",;
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",;
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",;
import { PartnerResources } from "@/components/partners/PartnerResources",;
import { useAuth } from "@/hooks/useAuth",;
import { useRouter } from 'next/router',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
import { useAuth } from "@/hooks/useAuth";
import { useRouter  } from 'next/router';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
export default function Partners() {
origin/cursor/automate-test-improve-and-merge-code-2533



  return (
    <div className="container max-w-7xl py-10">
      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('partner.dashboard_title')}</h1>
          <p className="text-zion-slate-light">{t('partner.dashboard_desc')}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>
            <FileDown className="h-4 w-4" />
  logInfo('PartnersPage rendering Authenticated View. User:', { data: user });
  return (
<div className='container max-w-7xl py-10'>
      <h1>DEBUG: Partners Page - Authenticated View</h1>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-white'>
            {t('partner.dashboard_title')}
          </h1>
          <p className='text-zion-slate-light'>{t('partner.dashboard_desc')}</p>
        </div>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='flex items-center gap-2'
            onClick={() => window.print()}
          >
            <FileDown className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
            {t('partner.export_csv')}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="overview">{t('partner.tabs.overview')}</TabsTrigger>
          <TabsTrigger value="referrals">{t('partner.tabs.referrals')}</TabsTrigger>
          <TabsTrigger value="earnings">{t('partner.tabs.earnings')}</TabsTrigger>
          <TabsTrigger value="leaderboard">{t('partner.tabs.leaderboard')}</TabsTrigger>
          <TabsTrigger value="resources">{t('partner.tabs.resources')}</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <PartnerDashboard />
        </TabsContent>
        <TabsContent value="referrals" className="space-y-4">
          <PartnerReferralLinks />
        </TabsContent>
        <TabsContent value="earnings" className="space-y-4">
        <TabsContent value="earnings" className="space-y-4">

<Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'
      >
        <TabsList className='grid grid-cols-2 md:grid-cols-5 mb-4'>
          <TabsTrigger value='overview'>
            {t('partner.tabs.overview')}
          </TabsTrigger>
          <TabsTrigger value='referrals'>
            {t('partner.tabs.referrals')}
          </TabsTrigger>
          <TabsTrigger value='earnings'>
            {t('partner.tabs.earnings')}
          </TabsTrigger>
          <TabsTrigger value='leaderboard'>
            {t('partner.tabs.leaderboard')}
          </TabsTrigger>
          <TabsTrigger value='resources'>
            {t('partner.tabs.resources')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='space-y-4'>
          <PartnerDashboard />
        </TabsContent>

        <TabsContent value='referrals' className='space-y-4'>
          <PartnerReferralLinks />
        </TabsContent>

        <TabsContent value='earnings' className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <Card>
            <CardHeader>
              <CardTitle>{t('partner.earnings_title')}</CardTitle>
              <CardDescription>{t('partner.earnings_desc')}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This will be implemented later */}
              <p className="text-zion-slate-light">{t('partner.earnings_placeholder')}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leaderboard" className="space-y-4">
          <PartnerLeaderboard />
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
        <TabsContent value="resources" className="space-y-4">
<p className='text-zion-slate-light'>
                {t('partner.earnings_placeholder')}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='leaderboard' className='space-y-4'>
          <PartnerLeaderboard />
        </TabsContent>

        <TabsContent value='resources' className='space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <PartnerResources />
        </TabsContent>
      </Tabs>
    </div>
  )
}
;
  );
async function checkHealth () {;
  try {;
  ;

}checkHealth () ;
origin/cursor/automate-test-improve-and-merge-code-2533
}, []);
//If not authenticated, display partner program info and signup CTA </div> <div className="grid md:grid-cols-2 gap-8 mb-12" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" /> <div> </div> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> </CardHeader> <CardContent className="space-y-4" > <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> <div className="flex items-start gap-3" > <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" /> <div> </div> </div> </CardContent> </Card> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <FileText className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader className="text-center pb-2" > <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4" > <PieChart className="h-6 w-6 text-zion-cyan" /> </div> </CardContent> </Card> </div> </div> <div className="flex justify-center gap-4" > <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white" asChild > > {t ('partner.login') ;
}</Button>) ;
}</div> </div>) ";
}//Authenticated user view - Partner Dashboard return (<div className="container max-w-7xl py-10" > <h1>DEBUG: Partners Page - Authenticated View</h1> <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8" > <div> </Button> </div> </div> </TabsList> <TabsContent value="overview" className="space-y-4" > <PartnerDashboard /> </TabsContent> <TabsContent value="referrals" className="space-y-4" > <PartnerReferralLinks /> </TabsContent> <TabsContent value="earnings" className="space-y-4" > <Card> <CardHeader> <CardTitle> {';
  t ('partner.earnings title') ;
}</CardTitle> <CardDescription> {';
  t ('partner.earnings desc') ";
}</CardDescription> </CardHeader> <CardContent> </CardContent> </Card> </TabsContent> <TabsContent value="leaderboard" className="space-y-4" > <PartnerLeaderboard /> </TabsContent> <TabsContent value="resources" className="space-y-4" > <PartnerResources /> </TabsContent> </Tabs> </div>) ;
}'"}
}
  )
}
;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
