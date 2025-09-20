import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Medical Consultation Process
            </h2>
            <div className="grid md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Symptom Input
                </h3>
                <p className="text-gray -300">
                  Describe your symptoms and concerns
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  AI Analysis
                </h3>
                <p className="text-gray -300">
                  AI processes symptoms and medical history
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Assessment
                </h3>
                <p className="text-gray -300">
                  Receive preliminary assessment
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Recommendations
                </h3>
                <p className="text-gray -300">
                  Get treatment and follow-up advice
                </p>
              </div>
            </div>
          </div>

          {/* Medical Specialties */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Medical Specialties
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['General MedicineCardiology',
                'DermatologyPediatrics',
                'Mental HealthNutrition',
                'Emergency CarePreventive Medicine'
              ].map (specialty => (<div
                  key={specialty}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">
                    {specialty}
                  </span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Healthcare Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Primary Care
                </h3>
                <p className="text-gray -300">
                  Routine health checkups and consultations
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Urgent Care
                </h3>
                <p className="text-gray -300">
                  Immediate medical advice for urgent symptoms
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Health Monitoring
                </h3>
                <p className="text-gray -300">
                  Chronic condition management and tracking
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-16 text-center">
            <div className="bg-yellow-600 / 20 border border-yellow-600 / 40 rounded-xl p - 6 max - w-4xl mx -auto">
              <p className="text-yellow-200 text-lg">
                ⚠️ <strong > Important:</strong > This AI system provides medical
                information and support but is not a replacement for
                professional medical care.Always consult with qualified
                healthcare providers for serious medical conditions.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - green - 600 to - emerald - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for 24 / 7 Medical Support?
            </h2>
            <p className="text-xl text-green - 100 mb-8 max - w-2xl mx -auto">
              Get instant medical consultation and health guidance whenever you
              need it
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-green - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-green - 600 transition -colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
