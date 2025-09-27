import {Button} from "@/components/ui/button",
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card",
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs",
import {CheckCircle, FileDown, FileText, PieChart, Users} from "lucide-react",
import {useState} from "react",
import {PartnerRegistrationForm} from "@/components/partners/PartnerRegistrationForm",
import {PartnerReferralLinks} from "@/components/partners/PartnerReferralLinks",
import {PartnerDashboard} from "@/components/partners/PartnerDashboard",
import {PartnerLeaderboard} from "@/components/partners/PartnerLeaderboard",
import {PartnerResources} from "@/components/partners/PartnerResources",
import {useAuth} from "@/hooks/useAuth",
import {useNavigate} from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { useNavigate } from "react-router-dom",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CheckCircle, FileDown, FileText, PieChart, Users } from "lucide-react",
import { useState } from "react",
import { PartnerRegistrationForm } from "@/components/partners/PartnerRegistrationForm",
import { PartnerReferralLinks } from "@/components/partners/PartnerReferralLinks",
import { PartnerDashboard } from "@/components/partners/PartnerDashboard",
import { PartnerLeaderboard } from "@/components/partners/PartnerLeaderboard",
import { PartnerResources } from "@/components/partners/PartnerResources",
export default function Partners() {;
const [activeTab, setActiveTab] = useState("overview"),;
const { user, isAuthenticated } = useAuth(),;
const navigate = useNavigate(),
export default function Partners() {;
const [activeTab, setActiveTab] = useState("overview"),;
const { user, isAuthenticated } = useAuth(),;
const navigate = useNavigate(),
  // If not authenticated, display partner program info and signup CTA,;
if (!isAuthenticated) {;
return (
      <div className="container max-w-6xl py-10">,
        <div className="text-center mb-8">,
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace
        
        <div className="grid md: grid-cols-2 gap-8 mb-12">,
          <Card className="bg-zion-blue-dark border-zion-blue-light">,
            <CardHeader>,
              <CardTitle className="text-white">For AI Influencers
              <CardDescription>Share your expertise and earn
            
            <CardContent className="space-y-4">,
              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />,
                <div>,
                  <p className="font-medium text-white">Monetize your audience
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />,
                <div>,
                  <p className="font-medium text-white">Exclusive insights
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0.5" />,
                <div>,
                  <p className="font-medium text-white">Marketing resources
                  <p className="text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials

          <Card className="bg-zion-blue-dark border-zion-blue-light">,
            <CardHeader>,
              <CardTitle className="text-white">For AI Organizations
              <CardDescription>Strategic partnerships
            
            <CardContent className="space-y-4">,
              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />,
                <div>,
                  <p className="font-medium text-white">Expand your ecosystem
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />,
                <div>,
                  <p className="font-medium text-white">Co-branded opportunities
                  <p className="text-sm text-zion-slate-light">Create joint content and events

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0.5" />,
                <div>,
                  <p className="font-medium text-white">Custom tracking
                  <p className="text-sm text-zion-slate-light">Detailed analytics on your referral performance

        <div className="text-center mb-12">,
          <h2 className="text-2xl font-bold text-white mb-4">How It Works
          <div className="grid md:grid-cols-3 gap-6">,
            <Card className="bg-zion-blue-dark border-zion-blue-light">,
              <CardHeader className="text-center pb-2">,
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">,
                  <Users className="h-6 w-6 text-zion-cyan" />,
                
                <CardTitle className="text-lg text-white">1. Join the Program
              
              <CardContent className="text-center text-sm text-zion-slate-light">,
                <p>Sign up and get approved as a Zion AI partner with your own dashboard

            <Card className="bg-zion-blue-dark border-zion-blue-light">,
              <CardHeader className="text-center pb-2">,
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">,
                  <FileText className="h-6 w-6 text-zion-cyan" />,
                
                <CardTitle className="text-lg text-white">2. Share Your Link
              
              <CardContent className="text-center text-sm text-zion-slate-light">,
                <p>Generate custom referral links and promote to your audience

            <Card className="bg-zion-blue-dark border-zion-blue-light">,
              <CardHeader className="text-center pb-2">,
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">,
                  <PieChart className="h-6 w-6 text-zion-cyan" />,
                
                <CardTitle className="text-lg text-white">3. Earn Rewards
              
              <CardContent className="text-center text-sm text-zion-slate-light">,
                <p>Get paid when referrals complete onboarding and engage with our platform

        <div className="flex justify-center gap-4">,
          <Button,
size="lg",
            className="bg-zion-purple hover:bg-zion-purple-dark",
            onClick={() => navigate('/signup')}
          >,
            Apply to Join,
          
          <Button,
size="lg",;,
variant="outline",
            className="text-zion-cyan border-zion-cyan",
          <Button,
size="lg",;,
variant="outline",
            className="text-zion-cyan border-zion-cyan",
export default function Partners() {;
const [activeTab, setActiveTab] = useState("overview"),;
const { user, isAuthenticated } = useAuth(),;
const navigate = useNavigate(),
  // If not authenticated, display partner program info and signup CTA,;
if (!isAuthenticated) {;
return (
      <div className="container max-w-6xl py-10">,
        <div className="text-center mb-8">,
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Zion AI Partner Program
          <p className="text-xl text-zion-slate-light">Earn rewards by referring AI talent and clients to our marketplace
        
        <div className="grid md: grid-cols-2 gap-8 mb-12">,
          <Card className="bg-zion-blue-dark border-zion-blue-light">,
            <CardHeader>,
              <CardTitle className="text-white">For AI Influencers
              <CardDescription>Share your expertise and earn
            
            <CardContent className="space-y-4">,
              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />,
                <div>,
                  <p className="font-medium text-white">Monetize your audience
                  <p className="text-sm text-zion-slate-light">Earn commissions from successful referrals

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />,
                <div>,
                  <p className="font-medium text-white">Exclusive insights
                  <p className="text-sm text-zion-slate-light">Get early access to AI marketplace trends

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-cyan mt-0 && 0.5" />,
                <div>,
                  <p className="font-medium text-white">Marketing resources
                  <p className="text-sm text-zion-slate-light">Access our partner toolkit with ready-to-use materials

          <Card className="bg-zion-blue-dark border-zion-blue-light">,
            <CardHeader>,
              <CardTitle className="text-white">For AI Organizations
              <CardDescription>Strategic partnerships
            
            <CardContent className="space-y-4">,
              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />,
                <div>,
                  <p className="font-medium text-white">Expand your ecosystem
                  <p className="text-sm text-zion-slate-light">Connect your community to AI job opportunities

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />,
                <div>,
                  <p className="font-medium text-white">Co-branded opportunities
                  <p className="text-sm text-zion-slate-light">Create joint content and events

              <div className="flex items-start gap-3">,
                <CheckCircle className="h-5 w-5 text-zion-purple mt-0 && 0.5" />,
                <div>,
                  <p className="font-medium text-white">Custom tracking
                  <p className="text-sm text-zion-slate-light">Detailed analytics on your referral performance

        <div className="text-center mb-12">,
          <h2 className="text-2xl font-bold text-white mb-4">How It Works
          <div className="grid md:grid-cols-3 gap-6">,
            <Card className="bg-zion-blue-dark border-zion-blue-light">,
              <CardHeader className="text-center pb-2">,
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">,
                  <Users className="h-6 w-6 text-zion-cyan" />,
                
                <CardTitle className="text-lg text-white">1. Join the Program
              
              <CardContent className="text-center text-sm text-zion-slate-light">,
                <p>Sign up and get approved as a Zion AI partner with your own dashboard

            <Card className="bg-zion-blue-dark border-zion-blue-light">,
              <CardHeader className="text-center pb-2">,
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">,
                  <FileText className="h-6 w-6 text-zion-cyan" />,
                
                <CardTitle className="text-lg text-white">2. Share Your Link
              
              <CardContent className="text-center text-sm text-zion-slate-light">,
                <p>Generate custom referral links and promote to your audience

            <Card className="bg-zion-blue-dark border-zion-blue-light">,
              <CardHeader className="text-center pb-2">,
                <div className="mx-auto bg-zion-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-4">,
                  <PieChart className="h-6 w-6 text-zion-cyan" />,
                
                <CardTitle className="text-lg text-white">3. Earn Rewards
              
              <CardContent className="text-center text-sm text-zion-slate-light">,
                <p>Get paid when referrals complete onboarding and engage with our platform

        <div className="flex justify-center gap-4">,
          <Button,
size="lg",
            className="bg-zion-purple hover:bg-zion-purple-dark",
            onClick={() => navigate('/signup')}
          >,
            Apply to Join,
          
          <Button,
size="lg",;,
variant="outline",
            className="text-zion-cyan border-zion-cyan"
            onClick={() => navigate('/login')}
          >,
            Partner Login,

      </div>)}
,
          <Button,
size="lg",;,
variant="outline",
            className="text-zion-cyan border-zion-cyan",
            onClick={() => navigate('/login')}
          >,
            Partner Login,

      </div>)}

  // Authenticated user view - Partner Dashboard,;
return (
    <div className="container max-w-7xl py-10">,
      <div className="flex flex-col md: flex-row justify-between items-start md:items-center gap-4 mb-8">,
        <div>,
          <h1 className="text-3xl font-bold tracking-tight text-white">Partner Dashboard
          <p className="text-zion-slate-light">Manage your referral links and track your performance
        
        <div className="flex gap-2">,
          <Button variant="outline" className="flex items-center gap-2" onClick={() => window.print()}>,
            <FileDown className="h-4 w-4" />,
            Export CSV,

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">,
        <TabsList className="grid grid-cols-2 md: grid-cols-5 mb-4">,
          <TabsTrigger value="overview">Overview
          <TabsTrigger value="referrals">Referral Links
          <TabsTrigger value="earnings">Earnings
          <TabsTrigger value="leaderboard">Leaderboard
          <TabsTrigger value="resources">Resources
        
        <TabsContent value="overview" className="space-y-4">,
          <PartnerDashboard />,
        
        <TabsContent value="referrals" className="space-y-4">,
          <PartnerReferralLinks />,
        
        <TabsContent value="earnings" className="space-y-4">,
          <Card>,
            <CardHeader>,
              <CardTitle>Earnings & Payouts
              <CardDescription>Track your earnings and manage payouts
            
            <CardContent>,

              {/* This will be implemented later */}
              <p className="text-zion-slate-light">Earnings tracking and payout requests will be available soon.

        <TabsContent value="leaderboard" className="space-y-4">,
          <PartnerLeaderboard />,
        
        <TabsContent value="resources" className="space-y-4">,
          <PartnerResources />,

    </div>)}
}
