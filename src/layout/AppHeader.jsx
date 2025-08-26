import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation.tsx';
export function AppHeader() {
    return (<header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-gray-900">
                        Zion Tech Group
                    </Link>
                </div>
                <MainNavigation />
            </div>
        </div>
    </header>);
}
