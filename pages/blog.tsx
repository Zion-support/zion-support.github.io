import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO from '../src/components/EnhancedSEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
	const { trackClick } = useAnalytics();

	const blogPosts = [
		{
			id: 1,
			title: 'The Future of AI in Business: Trends and Predictions for 2024',
			excerpt: 'Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for competitive advantage.',
			author: 'Sarah Johnson',
			date: '2024-01-15',
			readTime: '5 min read',
			category: 'AI & Machine Learning',
			image: '/api/placeholder/600/300',
			slug: 'future-ai-business-2024'
		},
		{
			id: 2,
			title: 'Cloud Migration Best Practices: A Complete Guide',
			excerpt: 'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.',
			author: 'Michael Chen',
			date: '2024-01-12',
			readTime: '8 min read',
			category: 'Cloud Computing',
			image: '/api/placeholder/600/300',
			slug: 'cloud-migration-best-practices'
		},
		{
			id: 3,
			title: 'Building Scalable Web Applications with Modern Architecture',
			excerpt: 'Discover the architectural patterns and technologies that enable web applications to scale efficiently and reliably.',
			author: 'Emily Rodriguez',
			date: '2024-01-10',
			readTime: '6 min read',
			category: 'Web Development',
			image: '/api/placeholder/600/300',
			slug: 'scalable-web-applications-architecture'
		},
		{
			id: 4,
			title: 'Digital Transformation: A Strategic Approach',
			excerpt: 'Understand how to plan and execute a successful digital transformation initiative that drives real business value.',
			author: 'David Kim',
			date: '2024-01-08',
			readTime: '7 min read',
			category: 'Digital Transformation',
			image: '/api/placeholder/600/300',
			slug: 'digital-transformation-strategic-approach'
		},
		{
			id: 5,
			title: 'Cybersecurity in the Cloud: Essential Protection Strategies',
			excerpt: 'Learn about the critical security considerations and best practices for protecting cloud-based applications and data.',
			author: 'Sarah Johnson',
			date: '2024-01-05',
			readTime: '9 min read',
			category: 'Cybersecurity',
			image: '/api/placeholder/600/300',
			slug: 'cybersecurity-cloud-protection-strategies'
		},
		{
			id: 6,
			title: 'The Rise of Edge Computing: Opportunities and Challenges',
			excerpt: 'Explore how edge computing is revolutionizing data processing and what it means for the future of technology.',
			author: 'Michael Chen',
			date: '2024-01-03',
			readTime: '6 min read',
			category: 'Edge Computing',
			image: '/api/placeholder/600/300',
			slug: 'edge-computing-opportunities-challenges'
		}
	];

	const categories = ['all', 'AI & Machine Learning', 'Cloud Computing', 'Web Development', 'Digital Transformation', 'Cybersecurity', 'Edge Computing'];

	const filteredPosts = blogPosts.filter(post => 
		categories.includes('all') || post.category === categories.find(cat => cat !== 'all')
	);

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsNewsletterLoading(true);
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		
		setIsNewsletterLoading(false);
		trackClick('newsletter-subscribe', 'engagement');
		alert('Thank you for subscribing to our newsletter!');
	};

	return (
		<>
			<EnhancedSEO />
			<Head>
				<title>Blog - Z i o n Ap p</title>
				<meta name="description" content="S t a y upda t e d w i t h th e lat e s t insig h t s o n A I cl o u d comput i n g we b developm e n t an d digi t a l transformat i o n from ou r exp e r t t e a m." />
				<meta name="viewp o r t" content="wi d t h=dev i c e-wi d t h init i a l-sc a l e=1" />
			</Head>
			<di v classN a m e="mi n-h-scr e e n b g-gradi e n t-t o-b r from-b l u e-5 0 t o-ind i g o-10 0 p t-2 0">
				<di v classN a m e="contai n e r m x-a u t o p x-4 p y-8 ma x-w-7x l">
					<na v classN a m e="m b-8">
						<Link href="/" classN a m e="t e x t-b l u e-60 0 ho v e r:t e x t-b l u e-80 0 f o n t-med i u m transit i o n-col o r s">
							← B a c k t o H o m e
						</Link>
					</na v>

					<hea d e r classN a m e="t e x t-cen t e r m b-1 6">
						<h 1 classN a m e="t e x t-5x l m d:t e x t-6x l f o n t-b o l d t e x t-b l u e-60 0 m b-4 b g-gradi e n t-t o-r from-b l u e-60 0 t o-ind i g o-60 0 b g-c l i p-t e x t t e x t-transpar e n t">
							Ou r Blog
						</h 1>
						<p classN a m e="t e x t-x l t e x t-g r a y-60 0 ma x-w-3x l m x-a u t o lead i n g-rela x e d">
							Insig h t s tre n d s an d exp e r t perspecti v e s o n technol o g y innovat i o n an d digi t a l transformat i o n.
						</p>
					</hea d e r>

					<m a i n>
						{/* Categ o r y Fil t e r */}
						<sect i o n classN a m e="m b-1 2">
							<di v classN a m e="f l e x f l e x-w r a p just i f y-cen t e r ga p-4">
								{categor i e s.ma p((categ o r y) => (
									<but t o n
										ke y={categ o r y}
										classN a m e={`p x-6 p y-3 roun d e d-f u l l f o n t-semib o l d transit i o n-col o r s ${
											categ o r y === 'al l'
												? 'b g-b l u e-60 0 t e x t-wh i t e sha d o w-m d'
												: 'b g-wh i t e t e x t-g r a y-80 0 ho v e r:b g-g r a y-10 0 sha d o w-s m'
										}`}
										onCl i c k={() => trackClick(`b l o g-categ o r y-${categ o r y}` 'navigat i o n')}
									>
										{categ o r y === 'al l' ? 'Al l Po s t s' : categ o r y}
									</but t o n>
								))}
							</di v>
						</sect i o n>

						{/* Blog Po s t s G r i d */}
						<sect i o n classN a m e="g r i d g r i d-c o l s-1 m d:g r i d-c o l s-2 l g:g r i d-c o l s-3 ga p-8 m b-1 6">
							{filteredPo s t s.ma p((p o s t) => (
								<arti c l e ke y={p o s t.i d} classN a m e="b g-wh i t e roun d e d-2x l sha d o w-l g overf l o w-hid d e n ho v e r:sha d o w-x l transit i o n-sha d o w">
									<di v classN a m e="relat i v e h-4 8">
										<Image
											sr c={p o s t.image}
											al t={p o s t.title}
											f i l l
											classN a m e="object-co v e r"
										/>
										<di v classN a m e="absol u t e to p-4 l e f t-4">
											<s p a n classN a m e="b g-b l u e-60 0 t e x t-wh i t e p x-3 p y-1 roun d e d-f u l l t e x t-s m f o n t-med i u m">
												{p o s t.categ o r y}
											</s p a n>
										</di v>
									</di v>
									<di v classN a m e="p-6">
										<di v classN a m e="f l e x it e m s-cen t e r t e x t-s m t e x t-g r a y-50 0 m b-3">
											<s p a n>{p o s t.aut h o r}</s p a n>
											<s p a n classN a m e="m x-2">•</s p a n>
											<s p a n>{p o s t.d a t e}</s p a n>
											<s p a n classN a m e="m x-2">•</s p a n>
											<s p a n>{p o s t.readT i m e}</s p a n>
										</di v>
										<h 2 classN a m e="t e x t-x l f o n t-b o l d t e x t-g r a y-90 0 m b-3 l i n e-cl a m p-2">
											{p o s t.title}
										</h 2>
										<p classN a m e="t e x t-g r a y-60 0 m b-4 l i n e-cl a m p-3">
											{p o s t.exce r p t}
										</p>
										<Link 
											href={`/b l o g/${p o s t.s l u g}`}
											classN a m e="t e x t-b l u e-60 0 f o n t-semib o l d ho v e r:t e x t-b l u e-80 0 transit i o n-col o r s"
											onCl i c k={() => trackClick(`b l o g-p o s t-${p o s t.s l u g}` 'engagem e n t')}
										>
											R e a d M o r e →
										</Link>
									</di v>
								</arti c l e>
							))}
						</sect i o n>

						{/* Newslet t e r Sig n u p */}
						<sect i o n classN a m e="b g-b l u e-60 0 roun d e d-2x l p-8 t e x t-wh i t e t e x t-cen t e r">
							<h 2 classN a m e="t e x t-3x l f o n t-b o l d m b-4">S t a y Upda t e d</h 2>
							<p classN a m e="t e x t-x l m b-6 t e x t-b l u e-10 0">
								Ge t th e lat e s t insig h t s an d upda t e s delive r e d t o y o u r in b o x.
							</p>
							<f o r m onSub m i t={handleNewsletterSub m i t} classN a m e="ma x-w-m d m x-a u t o">
								<di v classN a m e="f l e x ga p-4">
									<in p u t
										type="em a i l"
										placehol d e r="En t e r y o u r em a i l"
										classN a m e="f l e x-1 p x-4 p y-3 roun d e d-l g t e x t-g r a y-90 0 fo c u s:outl i n e-n o n e fo c u s:r i n g-2 fo c u s:r i n g-b l u e-30 0"
										requi r e d
									/>
									<but t o n
										type="sub m i t"
										disab l e d={isNewsletterLoading}
										classN a m e="b g-wh i t e t e x t-b l u e-60 0 p x-6 p y-3 roun d e d-l g f o n t-semib o l d ho v e r:b g-g r a y-10 0 transit i o n-col o r s disab l e d:opac i t y-5 0"
									>
										{isNewsletterLoading ? 'Subscrib i n g...' : 'Subscr i b e'}
									</but t o n>
								</di v>
							</f o r m>
						</sect i o n>
					</m a i n>
				</di v>
			</di v>
		</>
	)}