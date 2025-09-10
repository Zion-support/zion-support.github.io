import React from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation.tsx';

export function AppHeader() {
    return (<header className="bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-dark shadow-lg border-b border-zion-blue-light/20 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center">
                    <Link to="/" className="flex-shrink-0">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                            ZION
                        </h1>
                    </Link>
                </div>
                <MainNavigation />
            </div>
        </div>
    </header>);
}
