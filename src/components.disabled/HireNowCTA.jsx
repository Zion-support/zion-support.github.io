;
;import { MessageCircle, Calendar, Star } from &apos;lucide-react';&apos;&apos;
export const HireNowCTA = ({}
  hourlyRate,
  availability,
  rating,
  reviewCount}) => {}
  return()
    <;<Card className=&apos;sticky top-4&apos;>'&apos;&apos;''
      <CardHeader>&apos;&apos;'&apos;&apos;'
        <CardTitle className=&apos;text-xl&apos;>Hire This Talent&apos;</CardTitle>&apos;&apos;'&apos;&apos;
      </CardHeader>&apos;&apos;'&apos;&apos;'
      <CardContent className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;text-center&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;text-3xl font-bold text-blue-600 mb-2&apos;>
            ${hourlyRate}&apos;&apos;'&apos;&apos;
          </div>&apos;&apos;'&apos;&apos;'
          <div className=&apos;text-gray-600&apos;>per hour&apos;</div>
        <;</div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
            <span className=&apos;text-gray-600&apos;>Rating&apos;</span>&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex items-center space-x-1&apos;>'&apos;&apos;'&apos;&apos;
              <Star className=&apos;w-4 h-4 text-yellow-400 fill-current&apos; />&apos;&apos;'&apos;&apos;'
              <span className=&apos;font-medium&apos;>{rating}&apos;</span>&apos;&apos;'&apos;&apos;'
              <span className=&apos;text-gray-500&apos;>({reviewCount})&apos;</span>
            </div>
          </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
          <div className=&apos;flex items-center justify-between&apos;>'&apos;&apos;'&apos;&apos;
            <span className=&apos;text-gray-600&apos;>Availability&apos;</span>&apos;&apos;'
            <Badge&apos;&apos;
              variant={availability === &apos;available&apos; ? &apos;default&apos; : &apos;secondary&apos;}
              className={}
';
&apos;';
&apos;&apos;';
                availability === &apos;available&apos;&apos;'&apos;';
                  ? &apos;bg-green-100 text-green-800&apos;&apos;'&apos;';
                  : &apos;&apos;}
            >{availability}&apos;&apos;
            </Badge>
          </div>
        </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;space-y-3&apos;>'&apos;&apos;'&apos;&apos;
          <Button className=&apos;w-full bg-blue-600 hover:bg-blue-700&apos;>'&apos;&apos;'&apos;&apos;
            <MessageCircle className=&apos;w-4 h-4 mr-2&apos; />
            Send Message&apos;
          </Button>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
          <Button variant=&apos;outline&apos; className=&apos;w-full&apos;>'&apos;&apos;'&apos;&apos;
            <Calendar className=&apos;w-4 h-4 mr-2&apos; />
            Schedule Call&apos;
          </Button>
        </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;text-center text-sm text-gray-500&apos;>&apos;'
          <p>Response tim,e: Usually within 2 hours</p>
          <p>Available for new projects</p>
        </div>
      </CardContent>
    </Card>
  )}&apos;';&quot;
}&apos;';';
&apos;&apos;'&apos;'&quot;
&quot;"