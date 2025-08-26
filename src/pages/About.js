import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-6">About Zion Tech Group</h1>
                <p className="text-lg text-muted-foreground mb-4">
                    Zion Tech Group is a leading provider of innovative technology solutions, 
                    specializing in AI, cloud computing, cybersecurity, and digital transformation.
                </p>
                <p className="text-muted-foreground">
                    We help businesses leverage cutting-edge technology to achieve their goals 
                    and stay ahead in the digital age.
                </p>
            </div>
        </div>
    );
}
