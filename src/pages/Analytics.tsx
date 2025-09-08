import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Analytics: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
          <CardDescription>
            Track your performance and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Monitor your project performance, user engagement, and key metrics.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Analytics