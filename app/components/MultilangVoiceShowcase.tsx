'use client';
import { useState } from 'react';

const languages = [
  { code: 'es', name: 'Spanish', flag: '🇪🇸', greeting: 'Estimado/a', closing: 'Atentamente' },
  { code: 'fr', name: 'French', flag: '🇫🇷', greeting: 'Cher/Chère', closing: 'Cordialement' },
  { code: 'de', name: 'German', flag: '🇩🇪', greeting: 'Sehr geehrte/r', closing: 'Mit freundlichen Grüßen' },
  { code: 'pt', name: 'Portuguese', flag: '🇧🇷', greeting: 'Prezado/a', closing: 'Atenciosamente' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳', greeting: '尊敬的', closing: '此致敬礼' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵', greeting: '尊敬的な', closing: '敬具' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦', greeting: 'السيد/السيدة', closing: 'مع أطيب التحيات' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺', greeting: 'Уважаемый/ая', closing: 'С уважением' },
];

const voices = [
  { name: 'James', type: 'Professional Male', icon: '🎙️', best: 'Business, Formal' },
  { name: 'Sarah', type: 'Professional Female', icon: '🎤', best: 'Business, Support' },
  { name: 'Mike', type: 'Friendly Male', icon: '🗣️', best: 'Casual, Sales' },
  { name: 'Emma', type: 'Friendly Female', icon: '💬', best: 'Casual, Welcome' },
  { name: 'David', type: 'Authoritative', icon: '📢', best: 'Urgent, Escalation' },
  { name: 'Lisa', type: 'Warm', icon: '💝', best: 'Empathetic, Apologetic' },
  { name: 'Alex', type: 'Energetic', icon: '⚡', best: 'Enthusiastic, Sales' },
  { name: 'Grace', type: 'Calm', icon: '🕊️', best: 'Reassuring, Support' },
];

const emotions = [
  { name: 'Neutral', icon: '😐', desc: 'Standard professional tone' },
  { name: 'Friendly', icon: '😊', desc: 'Warm and approachable' },
  { name: 'Empathetic', icon: '🤗', desc: 'Understanding and caring' },
  { name: 'Urgent', icon: '⚡', desc: 'Fast-paced, action-oriented' },
  { name: 'Enthusiastic', icon: '🎉', desc: 'Excited and positive' },
  { name: 'Apologetic', icon: '🙏', desc: 'Sincere and regretful' },
  { name: 'Confident', icon: '💪', desc: 'Assured and decisive' },
  { name: 'Reassuring', icon: '🛡️', desc: 'Calming and supportive' },
];

export default function MultilangVoiceShowcase() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedVoice, setSelectedVoice] = useState(voices[0]);
  const [activeTab, setActiveTab] = useState<'language' | 'voice'>('language');

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Multi-Language & Voice Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            V94 & V95: Communicate in 40+ languages with culturally-appropriate responses and generate natural voice messages
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-10">
          <button onClick={() => setActiveTab('language')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'language' ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg' : 'bg-slate-800 text-gray-400 hover:text-white'}`}>
            🌍 V94: Multi-Language (40+ languages)
          </button>
          <button onClick={() => setActiveTab('voice')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'voice' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-slate-800 text-gray-400 hover:text-white'}`}>
            🎙️ V95: Voice Responses (8 voices)
          </button>
        </div>

        {activeTab === 'language' ? (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {languages.map((lang) => (
                <button key={lang.code} onClick={() => setSelectedLang(lang)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${selectedLang.code === lang.code ? 'border-teal-400 bg-teal-500/20 scale-105' : 'border-gray-700 bg-slate-800/50 hover:border-gray-500'}`}>
                  <div className="text-2xl mb-1">{lang.flag}</div>
                  <div className="text-sm font-bold text-white">{lang.name}</div>
                  <div className="text-xs text-gray-400">{lang.code.toUpperCase()}</div>
                </button>
              ))}
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{selectedLang.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedLang.name}</h3>
                  <p className="text-gray-400">Culturally-appropriate email template</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-xl p-5">
                  <div className="text-sm text-gray-400 mb-2">Greeting Style</div>
                  <div className="text-xl text-teal-300 font-semibold">{selectedLang.greeting}</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-5">
                  <div className="text-sm text-gray-400 mb-2">Closing Style</div>
                  <div className="text-xl text-teal-300 font-semibold">{selectedLang.closing}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {voices.map((voice) => (
                <button key={voice.name} onClick={() => setSelectedVoice(voice)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${selectedVoice.name === voice.name ? 'border-purple-400 bg-purple-500/20 scale-105' : 'border-gray-700 bg-slate-800/50 hover:border-gray-500'}`}>
                  <div className="text-2xl mb-1">{voice.icon}</div>
                  <div className="text-sm font-bold text-white">{voice.name}</div>
                  <div className="text-xs text-gray-400">{voice.type}</div>
                </button>
              ))}
            </div>
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{selectedVoice.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedVoice.name}</h3>
                  <p className="text-gray-400">{selectedVoice.type} — Best for: {selectedVoice.best}</p>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">🎭 Emotional Tones</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emotions.map((em) => (
                <div key={em.name} className="bg-slate-800/60 rounded-xl p-4 border border-gray-700">
                  <div className="text-2xl mb-2">{em.icon}</div>
                  <div className="text-sm font-bold text-white">{em.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{em.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">40+</div>
            <div className="text-gray-400">Languages Supported</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">8</div>
            <div className="text-gray-400">AI Voices</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">8</div>
            <div className="text-gray-400">Emotional Tones</div>
          </div>
          <div className="text-center p-6 bg-slate-800/50 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Reply-All Enforced</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-purple-600 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-white mb-4">Ready to Go Global with AI?</h4>
            <p className="text-gray-200 mb-6">Contact us for multi-language and voice AI solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-left">
              <div className="text-white"><div className="font-semibold">📞 Phone:</div><div>+1 302 464 0950</div></div>
              <div className="text-white"><div className="font-semibold">✉️ Email:</div><div>kleber@ziontechgroup.com</div></div>
              <div className="text-white"><div className="font-semibold">📍 Address:</div><div>364 E Main St STE 1008, Middletown, DE 19709</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
