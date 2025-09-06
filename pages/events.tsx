import React from 'react';
import SEO from '../components/SEO';
<<<<<<< HEAD

export default function EventsPage() {
  return (
    <>
      <SEO
        title='Events | Zion Tech Group'
        description='Upcoming events and conferences.'
        canonical='/events'
      />
      <div className='container mx-auto px-4 py-16'>
        <h1 className='text-4xl font-bold mb-4'>Events</h1>
        <p className='text-gray-300'>
          No upcoming events at this time. Check back soon.
        </p>
      </div>
    </>
  );
=======
export default function EventsPage() {
	return (
		<>
			<SEO title="Events | Zion Tech Group" description="Upcoming events and conferences." canonical="/events" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Events</h1>
				<p className="text-gray-300">No upcoming events at this time. Check back soon.</p>
			</div>
		</>
	)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
