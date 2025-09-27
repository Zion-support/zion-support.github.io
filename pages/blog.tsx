import React, {useStateuseEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedSEO from '../src/components/EnhancedSEO';
import { useAnalytics   } from "../src/hooks/useAnalytics";

export default function Blog(): JSX.Element {
	const [isVisiblesetIsVisible] = useState(false);
	const [selectedCategorysetSelectedCategory] = useState<string>('all');

	useEffect(() => {
		setIsVisible(true)}[]);
  const { trackClick } = useAnalytics();

	const blogPosts = [
		{id: 1title: 'The Future of AI in Business: Trends and Predictions for 2024'excerpt: 'Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for competitive advantage.'author: 'Sarah Johnson'date: '2024-01-15'readTime: '5 min read'category: 'AI & Machine Learning'image: '/api/placeholder/600/300'slug: 'future-ai-business-2024"
		}{id: 2title: "Cloud Migration Best Practices: A Complete Guide'excerpt: 'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.'author: 'Michael Chen',
			date: '2024-01-12',
			readTime: '8 min read',
			category: 'Cloud Computing'image: '/api/placeholder/600/300'slug: 'cloud-migration-best-practices"
		}{id: 3title: "Building Scalable Web Applications with Modern Architecture',
			excerpt: 'Discover the architectural patterns and technologies that enable web applications to scale efficiently and reliably.',
			author: 'Emily Rodriguez',
			date: '2024-01-10',
			readTime: '6 min read',
			category: 'Web Development'image: '/api/placeholder/600/300'slug: 'scalable-web-applications-architecture"
		}{id: 4title: "Cybersecurity in 2024: Emerging Threats and Defense Strategies',
			excerpt: 'Stay ahead of the latest cybersecurity threats and learn about the most effective defense strategies for modern businesses.',
			author: 'David Kim',
			date: '2024-01-08',
			readTime: '7 min read',
			category: 'Cybersecurity'image: '/api/placeholder/600/300'slug: 'cybersecurity-2024-threats-defense"
		}{id: 5title: "Digital Transformation: A Step-by-Step Implementation Guide',
			excerpt: 'Navigate the complexities of digital transformation with our comprehensive guide to planning and executing successful initiatives.',
			author: 'Sarah Johnson',
			date: '2024-01-05',
			readTime: '9 min read',
			category: 'Digital Transformation'image: '/api/placeholder/600/300'slug: 'digital-transformation-implementation-guide"
		}{id: 6title: "The Rise of Edge Computing: Benefits and Use Cases',
			excerpt: 'Explore how edge computing is revolutionizing data processing and discover its potential applications across industries.',
			author: 'Michael Chen',
			date: '2024-01-03',
			readTime: '6 min read',
			category: 'Edge Computing'image: '/api/placeholder/600/300'slug: 'rise-edge-computing-benefits-use-cases'
		}
		{id: 2
			title: "CloudComputingBest Practices"
			excerpt: "Essential, strategies, for successfulcloudmigration andoptimization."
			author: "SarahJohnson"
			date: "2024-01-10"
			category: "CloudComputing"
			readTime: "7minread"
			image: "/imag, e, s/bl, o, g/clo, u, d-best-practices.jpg"
		}
		{id: 3
			title: "DigitalTransformationGuide"
			excerpt: "A, comprehensive, roadmap formodernizingyour businessprocesses."
			author: "MikeChen"
			date: "2024-01-05"
			category: "DigitalTransformation"
			readTime: "8minread"
			image: "/imag, e, s/bl, o, g/digital-transformation.jpg"
		}];
	const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Web Development', 'Cybersecurity', 'Digital Transformation', 'Edge Computing'];
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());
  return (
    <>
			<Head>
        <title>Blog - Zion Tech Solutions</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="container mx-auto px-4 py-8 max-w-7 xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">

        <meta name="description" content="Stay updated with the latest insights on technologyAIcloud computing, and digital transformation from our expert team." />
        <meta name="viewport" content="width=device-widthinitial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-7 xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">

              ← Back to Home
            </Link>
          </nav>


            <h1 className="text-4 xl, md:text-6 xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team.
            </p>
          </header>
			<div className="flex flex-wrap gap-2 mb-8 justify-center">
           , {categories.map((category) => (
              <button
                key={category}
               , onClick={(()) => {setSelectedCategory(category);
                  trackClick(`blog-category-${category}`, 'filter')}}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
			<div className="grid grid-cols-1 md: grid-cols-2, lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
			<div className="p-6">
			<div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
			<div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime} min read
                    </span>
					<Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      onClick={() => trackClick(`blog-read-${post.slug}`, 'click')}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
			<div className="text-center py-16">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
		</>
  )}

	const filteredPosts = useMemo(() => {
		if (selectedCategory === 'all") {
			return blogPosts}
		return blogPosts.filter(post => post.category.toLowerCase() === selectedCategory)}[selectedCategoryblogPosts]);

	return (
		<>
			<Head>
				<title>Blog - Zion Tech Solutions</title>
				<meta name="description" content="Stay updated with the latest insights on technologyAIcloud computingand digital transformation from our expert team." />
				<meta name="viewport" content="width=device-widthinitial-scale=1" />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6">
							Our Blog
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Stay updated with the latest insights on technologyAIcloud computingand digital transformation.						</p>
					</header>

					{/* CategoryFilter */};
					<sectionclassName="mb-12">
						<divclassName="flexflex-wrapjustify-centergap-4">
							{categori, e, s.m, a, p((catego, ry) => (
								<buttonkey={category};
									onClic, k={() => handleCategoryFilt, e, r(category)};
									classNa, m, e={`px-6, p, y-2, rounde, d-full, fon, t-medium, transitio, n-colo, r, s ${
										selectedCatego, r, y === catego, r, y.toLowerCa, s, e() || (catego, r, y === "All" && selectedCategory === "all")
											? "bg-bl, u, e-600text-white"
											: "bg-white, tex, t-gr, ay-600hover:bg-gray-100"
									}`};								>
									{category}
								</button>
							))}
						</div>
					</div>

					{/* BlogPosts */};
					<sectionclassName="mb-16">
						<divclassName="gridmd:gr, i, d-co, l, s-2, lg:gr, i, d-cols-3 gap-8">
							{filteredPos, t, s.m, a, p((po, st) => (
								<articlekey={post.id} classNam, e="bg-white, rounde, d-xl, shado, w-lgoverflow-hiddenhover:shad, o, w-xltransition-shadow">
									<divclassName="h-48 bg-gradie, n, t-to-br, fro, m-bl, u, e-400, t, o-indi, g, o-500, flex, items-center justify-center">
										<spanclassName="text-white, tex, t-lgfont-semibold">{po, s, t.category}</span>
									</div>
									<divclassName="p-6">
										<divclassName="flex, item, s-center, tex, t-sm, tex, t-gr, a, y-500 mb-3">
											<span>{post.author}</span>
											<spanclassName="mx-2">•</span>
											<span>{post.date}</span>
											<spanclassName="mx-2">•</span>
											<span>{post.readTime}</span>
										</div>
										<h3className="text-xl, fon, t-semibold, tex, t-gr, a, y-900, m, b-3">{post.title}</h3>
										<pclassName="text-gr, a, y-600, m, b-4, leadin, g-relaxed">{po, s, t.excerpt}</p>
										<buttononClick={() => handleReadMore(post)};
											className="te, x, t-bl, u, e-600, font-mediumhover:te, x, t-bl, u, e-800, transitio, n-colors"										>
											Read More →
										</button>
									</div>
								</div>
							</article>
						))}
					</div>

					{/* Newsletter Signup */}
					<section className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
						<h2 className="text-3 xl font-bold mb-4">Stay Updated</h2>
						<p className="text-xl mb-6">Get the latest insights delivered to your inbox.</p>
						<div className="flex max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
							/>
							<button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
								Subscribe
							</button>
						</div>
					</section>
				</div>
			</div>
		</>
	)}

