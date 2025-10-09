
const ContentCarousel: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Content</h2>
        <div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AI Revolution</h3>
            <p className="text-gray-300">Discover how AI is transforming businesses worldwide.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300">The future of computing is here with quantum technology.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Digital Transformation</h3>
            <p className="text-gray-300">Transform your business with our digital solutions.</p>
          </div>
        </div>
      </div>
    </section>);
}
export default ContentCarousel