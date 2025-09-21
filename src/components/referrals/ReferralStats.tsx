
import React from "react",
import React from "react",
import { Award,,, Share,,, Star,,, TrendingUp,,  } from 'lucide-react'
interface ReferralStatsProps {
  stats: ReferralStatsType,
isLoading: boolean;
export function ReferralStats({ stats isLoading }: ReferralStatsProps) {
  const statCards = [
    {
      title: 'Total Referrals'
import { Card,,, CardContent,,, CardHeader,,, CardTitle,,  } from "@/components/ui/card"
import { ReferralStats,,, as,,, ReferralStatsType,,  } from "@/types/referrals"
import { Card,,, CardContent,,, CardHeader,,, CardTitle,,, CardDescription,,, CardFooter,,  } from '@/components/ui/card'
import { Star,,  } from 'lucide-react'
interface ReferralStatsProps {
return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {statCards.map((card i) => (        <Card key={i}>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>{card.title}</CardTitle>            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className='h-6 w-20 bg-muted animate-pulse rounded' />
            ) : (
              <>
                <div className='text-2xl font-bold'>{card.value}</div>
                <p className='text-xs text-muted-foreground'>
                  {card.description}
                </p>              </>              <div className="h-6 w-20 bg-muted animate-pulse rounded" />
            ) : (
              <>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}