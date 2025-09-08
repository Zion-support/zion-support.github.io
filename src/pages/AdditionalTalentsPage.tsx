import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AdditionalTalentsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Additional Talents</CardTitle>
          <CardDescription>
            Find specialized talent for your specific needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Access our database of specialized professionals across various domains.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdditionalTalentsPage