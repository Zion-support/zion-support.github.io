export default function RequestQuote(){
	return (
		<main className="mx-auto min-h-screen max-w-2xl px-6 py-12">
			<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Request a Quote</h1>
			<p className="mt-3 text-gray-700">Tell us about your project and we will get back to you within one business day.</p>
			<form className="mt-8 grid gap-4">
				<input className="w-full rounded border p-3" placeholder="Name" />
				<input className="w-full rounded border p-3" placeholder="Email" type="email" />
				<input className="w-full rounded border p-3" placeholder="Company" />
				<textarea className="w-full rounded border p-3" placeholder="Project details" rows={6} />
				<button className="rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" type="button">Submit</button>
			</form>
		</main>
	)
}