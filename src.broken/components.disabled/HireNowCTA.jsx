import React from 'react',
import { Button } from '../ui/button',
export default function Page() {
)</span>
            </div>
          </div>
"
          <div className="flex items-center justify-between">"
            <span className="text-gray-600">Availability</span>
            <Badge'
              variant={availability === 'available' ? 'default' : 'secondary'}
              className={

                availability === 'available''
                  ? 'bg-green-100 text-green-800''
                  : ''
              }
            >
              {availability}
            </Badge>
          </div>
        </div>
"
        <div className="space-y-3">"
          <Button className="w-full bg-blue-600 hover: bg-blue-700">"
            <MessageCircle className="w-4 h-4 mr-2" />
            Send Message
          </Button>
"
          <Button variant="outline" className="w-full">"
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Call
          </Button>
        </div>
"
        <div className="text-center text-sm text-gray-500">
          <p>Response time: Usually within 2 hours</p>
          <p>Available for new projects</p>
        </div>
      </CardContent>
    </Card>
  )
},
'"