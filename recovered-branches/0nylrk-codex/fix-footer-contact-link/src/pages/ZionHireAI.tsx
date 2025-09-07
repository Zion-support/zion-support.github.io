import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { useWhitelabel } from "@/context/WhitelabelContext",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Briefcase, PenTool, BarChart3, Users, Shield, Globe } from "lucide-react",
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
export default function ZionHireAI() {
  const { isWhitelabel, brandName, primaryColor } = useWhitelabel($2);
  const { isAuthenticated } = useAuth($2);
  return (
    <>

      <SEO
        title="Zion Hire AI - White-labeled AI Recruiting Assistant"
        description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience."
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-br from-zion-blue to-zion-blue-dark py-16 md:py-24"
          style={primaryColor ? { backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, rgba(25, 33, 52, 1))` } : {}}
        >
          <div className = $2;
                  improve candidate matches, and enhance the applicant experience.
                </p>
                <div className = $2;
                find better candidates, and make data-driven decisions.
              </p>
            </div>
            
            <div className = $2;
              reduce time-to-hire, and improve candidate experience.
            </p>
            <Button 
              size="lg" 
              className="bg-zion-purple hover: bg-zion-purple-light text-white"
              asChild
            >
              <Link to="/enterprise/demo">
                Schedule a Demo
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
}
;