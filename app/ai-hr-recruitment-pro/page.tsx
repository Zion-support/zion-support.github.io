import React from 'react';
import { ArrowRight, CheckCircle, UserCheck, FileText } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton;

const AIHRRecruitmentPro = () => {
  const features = [
    {
          title: ';AI Resume Screening",
      description: "Automatically screen and rank resumes using advanced AI algorithms",
      icon: <FileText className="w-6 h-6" />
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Candidate Matching",
      description: "Match candidates to job requirements with 95% accuracy",
      icon: <Target className="w-6 h-6" />
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Interview Scheduling",
      description: "Automated interview scheduling and calendar management",
      icon: <Clock className="w-6 h-6" />
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Talent Analytics",
      description: "Comprehensive analytics on recruitment performance and trends",
      icon: <TrendingUp className="w-6 h-6" />
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    
    <div>
    <EnhancedSEO />
      {/* Hero Section */}
      <section>
        <div>
    <div />
          <div />
  </div>
  <ResponsiveContainer />
          <div>
    <Users />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered HR</span>
          </div>
          
          <h1>  <span>AI HR & Recruitment Pro
            </span></h1>
          
          <p />
            Revolutionize your hiring process with AI-powered recruitment tools. 
            Find the best talent faster with automated screening, intelligent matching, and comprehensive analytics.
          </p>
          
          <div>
    <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5">}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Users className="w-5 h-5">}
            >
              View Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Intelligent Recruitment Features
            </h2>
            <p />
              Everything you need to streamline your hiring process and find the best talent.
            </p>
          </div>
          <div />
            {features.map((feature, index) => (
              <FuturisticCard />
                <div />
                  {feature.icon}
                </div>
                <h3 />
                  {feature.title}
                </h3>
                <p />
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Why Choose AI HR & Recruitment Pro?
            </h2>
            <p />
              Experience the future of talent acquisition with AI-powered recruitment tools.
            </p>
          </div>
          <div />
            {benefits.map((benefit, index) => (
              <div>
    <CheckCircle />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Ready to Transform Your Hiring?
            </h2>
            <p />
              Join leading companies using AI HR & Recruitment Pro to find and hire the best talent faster.
            </p>
            <div>
    <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5">}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<UserCheck className="w-5 h-5">}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

    </div>
  );
};

export default AIHRRecruitmentPro;
',
'