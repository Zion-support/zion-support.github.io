import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 - Page Not Found | Zion App</title>
				<meta name="description" content="The page you're looking for doesn't exist." />
			</Head>
			<div style={{ 
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				textAlign: "center",
				padding: "20px"
			}}>
				<h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#1f2937" }}>
					404
				</h1>
				<h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#374151" }}>
					Page Not Found
				</h2>
				<p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#6b7280" }}>
					The page you're looking for doesn't exist.
				</p>
				<Link 
					href="/" 
					style={{
						display: "inline-block",
						padding: "12px 24px",
						backgroundColor: "#2563eb",
						color: "white",
						textDecoration: "none",
						borderRadius: "8px",
						fontWeight: "600",
						transition: "background-color 0.2s"
					}}
				>
					Go Home
				</Link>
			</div>
		</>
	);
}