import { CheckCircle, Clock, Users, Zap  } from 'lucide-react',

export default function Page() {
          <div className="max - w-4xl mx -auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font - bold text-white mb-4">
                Request Your Quote
              </h2>
              <p className="text-zion - slate - light text-lg">
                Fill out the form below and we'll get back to you with a
                detailed quote within 24 hours.</p>
            </div>

            <QuoteRequestForm />
          </div>

          {/* Additional Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font - bold text-white mb-6">
              Need Immediate Assistance?
            </h3>
            <p className="text-zion - slate - light mb-6">
              For urgent requests or to speak with our team directly, contact
              us: </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <a
                href="mailto:commercial@ziontechgroup.com"
                className="inline - flex items - center px-6 py-3 bg-zion - cyan text-zion - blue - dark font - semibold rounded-lg hover:bg-zion - cyan / 90 transition -colors"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="inline - flex items - center px-6 py-3 border border-zion - purple text-zion - purple font - semibold rounded-lg hover:bg-zion - purple / 10 transition -colors"
              >
                Contact Page
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>) 
}
