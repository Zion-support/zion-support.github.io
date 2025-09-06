import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react'
import Link from "next/link", // Changed from react-router-dom
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget";
function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "" || envVar;
                behavior: 'smooth' 
              })
            }}
            className="flex items-center space-x-1 text-foreground/80 hover: text-primary text-sm transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/80 text-sm">
              &copy, {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md: mt-0">
              <Link
                href="/privacy"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/status"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                API Status
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
