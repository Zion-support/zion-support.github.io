import { Button } from '@/components/ui/button',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
export default function Partners() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Our Partners
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">Technology Partner</CardTitle>
              <CardDescription className="text-zion-cyan">
                Leading technology solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}