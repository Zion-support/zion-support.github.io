import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const BlogPost: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Blog Post</CardTitle>
          <CardDescription>
            Read our latest blog post
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a sample blog post. Content will be loaded dynamically.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogPost