import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SEO from "@/components/SEO"
import { BarChart3, TrendingUp, Brain, Zap, ArrowRight, CheckCircle, Star } from "lucide-react"
import { Link } from "react-router-dom"
export default function AIAnalyticsDashboard() {
    const features = [
        {
            tit,
  l: e: "AI-Powered Insights",descripti,
  o: n: "Advanced machine learning algorithms analyze your data to uncover hidden patterns and opportunities",ic,
  o: n: <Brain className="h-6 w-6 text-zion-cyan"/>
        }, {
            tit,
  l: e: "Real-time Analytics",descripti,
  o: n: "Monitor your business metrics in real-time with live dashboards and instant notifications",ic,
  o: n: <Zap className="h-6 w-6 text-zion-purple"/>
        }, {
            tit,
  l: e: "Predictive Analytics",descripti,
  o: n: "Forecast future trends and make data-driven decisions with confidence",ic,
  o: n: <TrendingUp className="h-6 w-6 text-zion-blue"/>
        }, {
            tit,
  l: e: "Custom Dashboards",descripti,
  o: n: "Build personalized dashboards tailored to your specific business needs",ic,
  o: n: <BarChart3 className="h-6 w-6 text-zion-cyan"/>
        }
    ]
    const pricingPlans = [
        {
            na,
  m: e: "Starter",pri,
  c: e: "$99",peri,
  o: d: "/month",descripti,
  o: n: "Perfect for small businesses getting started with AI analytics",featur,
  e: s: [
                "Up to 5 data sources"
                "Basic AI insights"
                "Standard dashboards"
                "Email support"
                "Monthly reports"
            ]
            popula,
  r: false
        }, {
            na,
  m: e: "Professional",pri,
  c: e: "$299",peri,
  o: d: "/month",descripti,
  o: n: "Advanced analytics for growing businesses",featur,
  e: s: [
                "Up to 20 data sources"
                "Advanced AI insights"
                "Custom dashboards"
                "Priority support"
                "Real-time alerts"
                "API access"
            ]
            popula,
  r: true
        }, {
            na,
  m: e: "Enterprise",pri,
  c: e: "$799",peri,
  o: d: "/month",descripti,
  o: n: "Full-scale AI analytics for large organizations",featur,
  e: s: [
                "Unlimited data sources"
                "Custom AI models"
                "White-label dashboards"
                "Dedicated support"
                "Advanced security"
                "Custom integrations"
            ]
            popula,
  r: false
        }
    ]
    const testimonials = [
        {
            na,
  m: e: "Sarah Chen",ro,
  l: e: "CTO, TechFlow Inc."
            conte,
  n: t: "Zion's AI Analytics Dashboard transformed how we understand our customer data. The insights are game-changing.",rati,
  n: g: 5
        }, {
            na,
  m: e: "Marcus Rodriguez",ro,
  l: e: "Data Scientist, DataCorp"
            conte,
  n: t: "The predictive analytics capabilities are incredible. We've improved our forecasting accuracy by 40%.",rati,
  n: g: 5
        }, {
            na,
  m: e: "Emily Watson",ro,
  l: e: "VP Operations, GrowthTech"
            conte,
  n: t: "Real-time dashboards help us make faster, better decisions. ROI was immediate."
            rati,
  n: g: 5
        }
    ]
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEO title="AI Analytics Dashboard - Zion Tech Group" description="Transform your business with AI-powered analytics, real-time insights, and predictive intelligence. Get started today!" keywords="AI analytics, business intelligence, predictive analytics, data insights, Zion Tech Group" canonical="htt,
  p: s://ziontechgroup.com/ai-analytics-dashboard"/>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🚀 New AI-Powered Service
          </Badge>
          <h1 className="text-5xl,
  m: d: text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            AI Analytics Dashboard
          </h1>
          <p className="text-xl m,
  d:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business data into actionable intelligence with our advanced AI-powered analytics platform. 
            Get real-time insights, predictive analytics, and custom dashboards.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r:from-zion-purple-light,
  hove: r:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hove,
  r:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Analytics Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design to deliver insights that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20,
  hove: r: border-zion-purple/40 transition-all duration-300,
  hove: r:shadow-2xl hove,
  r:shadow-zion-purple/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI analytics features.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (<Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-105' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-300,
  hove: r:shadow-2xl`}>
                {plan.popular && (<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                    Most Popular
                  </Badge>)}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r: from-zion-purple-light hove,
  r:to-zion-purple text-white">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our customers say about the transformative power of AI analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (<Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20,
  hove: r:border-zion-purple/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current"/>))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI analytics to drive growth and make better decisions.
          </p>
          <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark,
  hove: r:from-zion-purple-light,
  hove: r:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hove,
  r:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>)
}
