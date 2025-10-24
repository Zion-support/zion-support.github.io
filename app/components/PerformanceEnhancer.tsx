'use client';
import { Metadata } from 'next';
import React from 'react';
import  Helmet  from 'react-helmet-async';
import  Brain  CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe        } from 'lucide-react';
import { { ArrowRight     } from 'lucide-react';
  
  const benefits="'Increase" efficiency by up to 50'
    'Reduce costs by 30 with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
                </div>
              
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            
          </div>
      </div>
      </section>
export default PerformanceEnhancerPage }