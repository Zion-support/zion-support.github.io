import React from 'react';

export default function Blog() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Blog</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Latest insights and updates from Zion Tech Group.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">AI in Modern Business</h3>
                        <p className="text-muted-foreground mb-4">
                            Discover how artificial intelligence is transforming business operations and creating new opportunities.
                        </p>
                        <span className="text-sm text-muted-foreground">January 15, 2025</span>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cloud Migration Best Practices</h3>
                        <p className="text-muted-foreground mb-4">
                            Learn the essential steps and strategies for successful cloud migration projects.
                        </p>
                        <span className="text-sm text-muted-foreground">January 10, 2025</span>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Cybersecurity Trends 2025</h3>
                        <p className="text-muted-foreground mb-4">
                            Stay ahead of emerging cybersecurity threats and protect your business with the latest security measures.
                        </p>
                        <span className="text-sm text-muted-foreground">January 5, 2025</span>
                    </div>
                    <div className="border border-border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">Digital Transformation Guide</h3>
                        <p className="text-muted-foreground mb-4">
                            A comprehensive guide to digital transformation for businesses of all sizes.
                        </p>
                        <span className="text-sm text-muted-foreground">December 28, 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
