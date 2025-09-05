import React from 'react',
import SEO from '../components/SEO',
export default function AIMeetingNotesPage() {
	return (
		<>
			<SEO title=&quot;AI Meeting Notes&quot; description=&quot;Automatic meeting transcription, summaries, and action items.&quot; canonical=&quot;/ai-meeting-notes&quot; />
			<section className=&quot;relative pt-28 pb-16 md:pt-36 md:pb-24&quot;>
				<div className=&quot;container mx-auto px-4 max-w-3xl&quot;>
					<h1 className=&quot;text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple&quot;>AI Meeting Notes</h1>
					<p className=&quot;mt-4 text-gray-300&quot;>Transcribe calls, summarize discussions, and capture action items automatically.</p>
					<div className=&quot;mt-8 flex gap-3&quot;>
						<a href=&quot;/services&quot; className=&quot;px-4 py-2 rounded-lg bg-white text-black font-medium&quot;>Explore Services</Link>
						<a href=&quot;/contact&quot; className=&quot;px-4 py-2 rounded-lg border border-white/10 text-gray-200&quot;>Contact Sales</Link>					</div>
				</div>
			</section>
		</>
	)
}