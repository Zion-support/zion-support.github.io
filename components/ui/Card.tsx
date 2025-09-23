import React, { HTMLAttributes, forwardRef } from 'react';

type DivProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, DivProps>(function Card(props, ref) {
	return <div ref={ref} {...props} />;
});

export const CardHeader = forwardRef<HTMLDivElement, DivProps>(function CardHeader(props, ref) {
	return <div ref={ref} {...props} />;
});

export const CardTitle = forwardRef<HTMLDivElement, DivProps>(function CardTitle(props, ref) {
	return <div ref={ref} {...props} />;
});

export const CardDescription = forwardRef<HTMLDivElement, DivProps>(function CardDescription(props, ref) {
	return <div ref={ref} {...props} />;
});

export const CardContent = forwardRef<HTMLDivElement, DivProps>(function CardContent(props, ref) {
	return <div ref={ref} {...props} />;
});

export const CardFooter = forwardRef<HTMLDivElement, DivProps>(function CardFooter(props, ref) {
	return <div ref={ref} {...props} />;
});

export default Card;
