import React from 'react';
import Link from 'next/link';

export default function AIMegaTransformationSuccessBanner() {
  return (
    <section className="text-left">
      {/* Success Pattern Background */}
      <div className="text-left">
        <div className="text-left"60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <span className="text-left">🏆<
            <span className="text-left">MEGA TRANSFORMATION SUCCESS<
          </div>
          
          <h2 className="text-left">
            $50M+ in AI
            <span className="text-left">
              {' '}Transformation Success
            <
          </h2>
          
          <p className="text-left">
            Discover how leading enterprises achieved unprecedented success with our AI transformation solutions. 
            Real results, real impact, real transformation stories.
          </p>

          <div className="text-left">
            <div className="text-left">
              <span className="text-left">💰<
              <span>$50M+ Total Savings<
            </div>
            <div className="text-left">
              <span className="text-left">📈<
              <span>500% Average ROI<
            </div>
            <div className="text-left">
              <span className="text-left">⚡<
              <span>90% Efficiency Gain<
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="text-left">
          {/* Fortune 500 Success */}
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">
                <span className="text-left">🏢<
              </div>
              <h3 className="text-left">Fortune 500 Retailer</h3>
            </div>
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">$12M</div>
                <div className="text-left">Annual Savings</div>
              </div>
              <p className="text-left">
                "Zion Tech Group's AI automation transformed our supply chain, reducing costs by 60% 
                and improving delivery times by 40%."
              </p>
              <div className="text-left">
                <div className="text-left">- Chief Technology Officer</div>
              </div>
            </div>
          </div>

          {/* Healthcare Innovation */}
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">
                <span className="text-left">🏥<
              </div>
              <h3 className="text-left">Healthcare System</h3>
            </div>
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">85%</div>
                <div className="text-left">Process Efficiency</div>
              </div>
              <p className="text-left">
                "AI-powered patient care optimization reduced wait times by 70% and improved 
                patient satisfaction scores to 98%."
              </p>
              <div className="text-left">
                <div className="text-left">- Medical Director</div>
              </div>
            </div>
          </div>

          {/* Financial Services */}
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">
                <span className="text-left">🏦<
              </div>
              <h3 className="text-left">Global Bank</h3>
            </div>
            <div className="text-left">
              <div className="text-left">
                <div className="text-left">600%</div>
                <div className="text-left">ROI Achieved</div>
              </div>
              <p className="text-left">
                "Risk assessment automation and fraud detection systems saved us $8M annually 
                while improving accuracy by 95%."
              </p>
              <div className="text-left">
                <div className="text-left">- Chief Risk Officer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Metrics */}
        <div className="text-left">
          <h3 className="text-left">Transformation Impact</h3>
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">$50M+</div>
              <div className="text-left">Total Client Savings</div>
              <div className="text-left">Across all implementations</div>
            </div>
            <div className="text-left">
              <div className="text-left">500%</div>
              <div className="text-left">Average ROI</div>
              <div className="text-left">Within 12 months</div>
            </div>
            <div className="text-left">
              <div className="text-left">90%</div>
              <div className="text-left">Efficiency Improvement</div>
              <div className="text-left">Process automation</div>
            </div>
            <div className="text-left">
              <div className="text-left">98%</div>
              <div className="text-left">Client Satisfaction</div>
              <div className="text-left">Success rate</div>
            </div>
          </div>
        </div>

        <div className="text-left">
          <div className="text-left">
            <Link
              href="/case-studies"
              className="text-left"
            >
              View All Success Stories
            </Link>
            <Link
              href="/services"
              className="text-left"
            >
              Start Your Transformation
            </Link>
          </div>
          
          <div className="text-left">
            <p className="text-left">Ready to join these success stories?</p>
            <p className="text-left">
              Schedule a free consultation to discover how AI can transform your business. 
              Average ROI: 500% within 12 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}