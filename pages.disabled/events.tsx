}

import React from 'react',
import SEO from '../components / SEO',


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
pr-12243
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
;

ursor/fix-website-loading-errors-and-merge-6662
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
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
