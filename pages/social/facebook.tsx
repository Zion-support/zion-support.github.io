import { useEffect } from 'react'

export default function FacebookRedirect() {
	useEffect(() => {
		window.location.replace('https://www.facebook.com/ziontechgroup')
	}, [])
	return <p>Redirecting to Facebook…</p>
}