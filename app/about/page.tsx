
export const metadata = {
  title: "About | Zion Tech Group",
  description:
    "Learn about Zion Tech Group's mission to deliver enterprise-grade AI,micro SaaS,and IT solutions that drive real business results.",
}
export default function AboutPage() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
        <div>
          <p>
            We are a technology consulting firm specializing in AI, micro SaaS development, and enterprise IT solutions.
            Our mission is to help businesses leverage cutting-edge technology to achieve their goals.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p>
            To deliver enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.
            We combine technical expertise with business acumen to help our clients succeed in the digital age.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Innovation: We stay at the forefront of technology trends</li>
            <li>Quality: We deliver solutions that meet the highest standards</li>
            <li>Collaboration: We work closely with our clients to understand their needs</li>
            <li>Results: We focus on delivering measurable business outcomes</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div>
            <div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}