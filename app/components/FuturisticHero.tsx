import { Link } from "react-router-dom";


export default function FuturisticHero() {
  return (
    <>
      <div className="futuristic-hero-container">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <div className="w-6 h-6 bg-blue-500 rounded" />
        </Link>
      </div>
    </>
  );
}
