import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Users, ArrowRight, Video, Globe, Award } from 'lucide-react'


export default function Events() {
	const upcomingEvents = [
		{
			id: 1,
			title: 'AI in Enterprise: A Practical Guide',
			date: '2025-02-15',
			time: '10:00 AM - 12:00 PM PST',
			location: 'Virtual Event',
			attendees: 150,
			type: 'Webinar',
			description: 'Learn how to implement AI solutions in your enterprise environment with real-world case studies and best practices.',
			speaker: 'Dr. Sarah Chen, AI Solutions Architect'
		},
		{
			id: 2,
			title: 'Cloud Security Summit 2025',
			date: '2025-02-22',
			time: '9:00 AM - 5:00 PM PST',
			location: 'San Francisco, CA',
			attendees: 300,
			type: 'Conference',
			description: 'Join industry experts for a comprehensive look at the latest cloud security threats and defense strategies.',
			speaker: 'Alex Thompson, Chief Security Officer'
		},
		{
			id: 3,
			title: 'Micro SaaS Workshop',
			date: '2025-03-01',
			time: '2:00 PM - 4:00 PM PST',
			location: 'Virtual Event',
			attendees: 75,
			type: 'Workshop',
			description: 'Hands-on workshop on building and scaling micro SaaS solutions for modern businesses.',
			speaker: 'Michael Rodriguez, SaaS Solutions Lead'
		},
		{
			id: 4,
			title: 'Quantum Computing in Business',
			date: '2025-03-08',
			time: '11:00 AM - 1:00 PM PST',
			location: 'Virtual Event',
			attendees: 120,
			type: 'Webinar',
			description: 'Explore the potential of quantum computing and how it will transform business operations.',
			speaker: 'Dr. Emily Watson, Quantum Research Lead'
		}
	]

	const pastEvents = [
		{
			id: 5,
			title: 'AI Automation Workshop',
			date: '2025-01-20',
			recording: true,
			attendees: 200,
			type: 'Workshop'
		},
		{
			id: 6,
			title: 'Cloud Migration Strategies',
			date: '2025-01-15',
			recording: true,
			attendees: 180,
			type: 'Webinar'
		}
	]

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Events & Webinars
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Join us for insightful discussions, hands-on workshops, and networking opportunities with industry experts.
						</p>
					</div>
				</div>
			</section>

			{/* Upcoming Events */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Upcoming Events</h2>
						<p className="mt-6 text-lg text-gray-600">
							Mark your calendar for these exciting events
						</p>
					</div>
					<div className="space-y-8">
						{upcomingEvents.map((event) => (
							<div key={event.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
								<div className="lg:flex lg:items-start lg:justify-between">
									<div className="flex-1">
										<div className="flex items-center gap-4 mb-4">
											<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
												{event.type}
											</span>
											<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
												{event.attendees} attending
											</span>
										</div>
										<h3 className="text-2xl font-bold text-gray-900 mb-4">
											{event.title}
										</h3>
										<p className="text-gray-600 mb-6">
											{event.description}
										</p>
										<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<Calendar className="h-4 w-4" />
												{new Date(event.date).toLocaleDateString()}
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<Clock className="h-4 w-4" />
												{event.time}
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<MapPin className="h-4 w-4" />
												{event.location}
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<Users className="h-4 w-4" />
												{event.speaker}
											</div>
										</div>
									</div>
									<div className="mt-6 lg:mt-0 lg:ml-6">
										<Link
											to={`/events/${event.id}`}
											className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
										>
											Register Now
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Event Types */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Types of Events</h2>
						<p className="mt-6 text-lg text-gray-600">
							We offer various formats to suit different learning preferences
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<Video className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Webinars</h3>
							<p className="text-gray-600">
								Interactive online sessions covering the latest trends and technologies in AI, cloud, and cybersecurity.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Users className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Workshops</h3>
							<p className="text-gray-600">
								Hands-on sessions where you can learn practical skills and work with real tools and technologies.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Globe className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Conferences</h3>
							<p className="text-gray-600">
								Multi-day events featuring keynote speakers, networking opportunities, and comprehensive learning tracks.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Past Events */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Past Events</h2>
						<p className="mt-6 text-lg text-gray-600">
							Missed an event? Watch recordings and access materials
						</p>
					</div>
					<div className="grid gap-6 lg:grid-cols-2">
						{pastEvents.map((event) => (
							<div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6">
								<div className="flex items-start justify-between">
									<div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											{event.title}
										</h3>
										<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
											<div className="flex items-center gap-2">
												<Calendar className="h-4 w-4" />
												{new Date(event.date).toLocaleDateString()}
											</div>
											<div className="flex items-center gap-2">
												<Users className="h-4 w-4" />
												{event.attendees} attended
											</div>
										</div>
										<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
											{event.type}
										</span>
									</div>
									{event.recording && (
										<Link
											to={`/events/${event.id}/recording`}
											className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
										>
											Watch Recording
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Can't Make It to an Event?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Contact us to schedule a private consultation or custom workshop for your team
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<Link
							to="/contact"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Schedule Consultation
						</Link>
						<Link
							to="/services"
							className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
						>
							View Services <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}