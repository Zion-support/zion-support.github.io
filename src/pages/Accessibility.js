import React from 'react';

export default function Accessibility() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Accessibility Statement</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Zion Tech Group is committed to ensuring digital accessibility for people with disabilities.
                </p>
                <div className="space-y-6 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
                        <p>We are committed to making our website accessible to all users, including those with disabilities. We strive to ensure that our website meets or exceeds the accessibility standards set forth by the Web Content Accessibility Guidelines (WCAG) 2.1.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Accessibility Features</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Keyboard navigation support</li>
                            <li>Screen reader compatibility</li>
                            <li>High contrast mode</li>
                            <li>Resizable text</li>
                            <li>Alternative text for images</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                        <p>If you experience any accessibility issues or have suggestions for improvement, please contact us at accessibility@ziontechgroup.com. We value your feedback and are committed to making our website accessible to everyone.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
