

import React from 'react'
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react'
          ))}
        </div>
      </div>
    </section>
  )
}

        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
          {features.map (feature => (
            <div;
              key={feature.title}
              className='bg - card rounded - lg p - 6 shadow - sm border border - border transition - all hover:shadow - md'            >;
              <div className='h - 12 w - 12 rounded - lg bg - primary / 10 flex items - center justify - center mb - 5'>;
                <feature.icon className='h - 6 w - 6 text - primary' />;
              </div>;
              <h3 className='font - bold text - xl mb - 3'>{feature.title}</h3>;
              <p className='text - muted - foreground'>{feature.description}</p>            </div>;
              <h3 className="font - bold text - xl mb - 3">{feature.title}</h3>;
              <p className="text - muted - foreground">{feature.description}</p>;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {features.map ((feature) => (
            <div;
              key={feature.title}
              className="bg - card rounded - lg p - 6 shadow - sm border border - border transition - all hover:shadow - md";
            >;
              <div className="h - 12 w - 12 rounded - lg bg - primary / 10 flex items - center justify - center mb - 5">;
                <feature.icon className="h - 6 w - 6 text - primary" />;
              </div>;
              <h3 className="font - bold text - xl mb - 3">{feature.title}</h3>;
              <p className="text - muted - foreground">{feature.description}</p>;
            </div>))}
        </div>;
      </div>;
    </section>);
}

}
;
