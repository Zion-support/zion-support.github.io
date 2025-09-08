import React, { ReactNode } from 'react';

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<div className={className}>{children}</div>
);

export const CardHeader: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<div className={className}>{children}</div>
);

export const CardTitle: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<h3 className={className}>{children}</h3>
);

export const CardContent: React.FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<div className={className}>{children}</div>
);