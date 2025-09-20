import React, { useState } from 'react',
import { Badge } from '@/components / ui / badge',

export default function Page() {
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Website
              </Button>
            </div>

            <div  className="mt-12 p - 6 bg-zion - blue - dark rounded-lg border border-zion - blue -light">
              <h3 className="text-xl font - bold text-white mb-4">Special Enterprise Offerings</h3>
              <p className="text-zion - slate - light mb-4">
                For enterprise clients, we offer custom solution development, dedicated support teams, and comprehensive implementation services.</p>
              <Button
                className="bg-zion - purple hover:bg-zion - purple - dark text-white"
                onClick={ () => window.open(`mailto:${CONTACT_INFO.email}?subject = Enterprise%20Inquiry`, '_self') }

                Request Enterprise Consultation
              </Button>
            </div>,
          </div>,
        </div>,
      </section>,
    </div>,) ,
}
