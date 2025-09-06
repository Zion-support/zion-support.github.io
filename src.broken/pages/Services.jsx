import React from 'react';

export default function Services() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">Our Services</h1>
                <p className="text-lg text-muted-foreground mb-4">
                    Zion Tech Group offers comprehensive technology solutions including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>AI and Machine Learning Solutions</li>
                    <li>Cloud Computing and Migration</li>
                    <li>Cybersecurity Services</li>
                    <li>Digital Transformation Consulting</li>
                    <li>Quantum Computing Solutions</li>
                </ul>
            </div>
        </div>
    );
}
