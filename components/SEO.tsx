import Head from 'next/head'
import type { ReactNode } from 'react'

type Props = {
	title?: string
	description?: string
	children?: ReactNode
}

export default function SEO({ title = 'Zion Tech Group', description = 'AI & Technology Solutions', children }: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			{children}
		</Head>
	)
}
