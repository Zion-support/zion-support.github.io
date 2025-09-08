import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, Phone, Mail, MapPin, Sparkles, Zap, Shield, Brain, Code, Database, BarChart3, Link as LinkIcon, UserCheck } from "lucide-react";
import Workflow from "lucide-react/dist/esm/icons/workflow";
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSocialLinkClick(link, e)}
                    className="w-10 h-10 bg-zion-slate-light/20 hover:bg-zion-cyan/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={link.name}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-zion-slate-light text-sm mb-4">
                Stay updated with our latest insights and innovations
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-l-md text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                />
                <button className="px-4 py-2 bg-zion-cyan text-black font-medium rounded-r-md hover:bg-zion-cyan/80 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-zion-slate-light hover:text-zion-cyan transition-colors">All Services</Link></li>
              <li><Link href="/ai-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link></li>
              <li><Link href="/quantum-technology" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Technology</Link></li>
              <li><Link href="/cybersecurity" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              <li><Link href="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-matcher" className="text-zion-slate-light hover:text-zion-cyan transition-colors">AI Matcher</Link></li>
              <li><Link to="/service-description-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Service Generator</Link></li>
              <li><Link to="/content-generator" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Content Generator</Link></li>
              <li><Link to="/portfolio-builder" className="text-zion-slate-light hover:text-zion-cyan transition-colors">Portfolio Builder</Link></li>
            <h3 className="text-white font-semibold mb-4 text-xl">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Get the latest news on tech, AI, and marketplace opportunities. 
              Join thousands of professionals staying ahead of the curve.
