'use client';
const testimonials = [
  { name: 'Sarah K.', role: 'CTO, TechStartup', text: 'Zion Tech Group transformed our email workflow. The AI engines saved us 40+ hours per week!', rating: 5 },
  { name: 'Michael R.', role: 'VP Engineering', text: '2000+ services and every one delivers real value. The email intelligence suite is game-changing.', rating: 5 },
  { name: 'Lisa M.', role: 'Director of Operations', text: 'Reply-all enforcement and case-by-case analysis made our team 3x more productive.', rating: 5 },
];
export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">💬 What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-yellow-400 mb-3">{'⭐'.repeat(t.rating)}</div>
              <p className="text-gray-300 mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="text-white font-medium">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
