



import React from "react";""
import {cn} from "@/lib/utils";""
import {Button} from "@/components/ui/button";""
import {Link} from "react-router-dom";""
import React from "react",""
import { cn } from "@/lib/utils",""
import { Button } from "@/components/ui/button";""
import { Link } from "react-router-dom";""
import { Button } from "@/components/ui/button",""
import { Link } from "react-router-dom","
interface EmptyStateProps {
  // TODO: Implement
}
  icon: React.ReactNode;,
  title: string;
  description: string;
  action?: {
"
import {Link} from "react-router-dom";"
interface EmptyStateProps {;
  icon: React && React.ReactNode,;
  title: string,;
  description: string,;
  action?: {;
    text: string,;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {;
  className?: string;

export function EmptyState(): any ({;

  icon;
  title;
  description;
  action;
  secondaryAction;)
  className}: EmptyStateProps) {;
    text: string,
    href?: string,
  },
  secondaryAction?: {




  className}: EmptyStateProps) {

export function EmptyState({;
  secondaryAction;

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,

)
  return (
    <div;
      className={cn(
        "flex flex-col items-center justify-center text-center p-6 md: p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50""
        className;"
import React from "react",;""
import { cn } from "@/lib/utils",;""
import { Button } from "@/components/ui/button",;""
import { Link } from "react-router-dom",;"
  icon: React.ReactNode,;
    href?: string,;)
</div>
      className={cn(;"
        "flex flex-col items-center justify-center text-center p-6 md:p-10 rounded-lg border border-zion-blue-light bg-zion-blue-dark/50";"
        className;)
      )}
    >
</div>"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">"
      <div className="bg-zion-blue/30 p-6 rounded-full mb-6">;"
      </div>;"
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>;""
      <p className="text-zion-slate text-lg mb-8 max-w-md">{description}</p>;""
      <div className="flex flex-col sm:flex-row gap-4">;"
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-light">;"

              <Link to={action && action.href}>{action && action.text};
            ;
            <Button;"
              size="lg"""
              className="bg-zion-purple hover:bg-zion-purple-light""
              onClick={action && action.onClick}>;

              onClick={action.onClick}

            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">"

              <Link to={secondaryAction.href}>{secondaryAction.text}
            <Button asChild variant="outline" size="lg" className="border-zion-blue-light hover:bg-zion-blue-light">;"

              <Link to={secondaryAction && secondaryAction.href}>{secondaryAction && secondaryAction.text};
              variant="outline""
              variant="outline"""
              className="border-zion-blue-light hover:bg-zion-blue-light""
              onClick={secondaryAction && secondaryAction.onClick}>;

      </div>;
      className={cn ("
        "flex flex - col items - center justify - center text - center p - 6 md: p - 10 rounded - lg border border - zion - blue - light bg - zion - blue - dark / 50",")
        class_name)}
    >;
      <div className="bg - zion - blue / 30 p - 6 rounded - full mb - 6">;"
      <h3 className="text - 2xl font - semibold text - white mb - 3">{title}</h3>;""
      <p className="text - zion - slate text - lg mb - 8 max - w-md">{description}</p>;""
      <div className="flex flex - col sm:flex - row gap - 4">;"
            <Button as_child size="lg" className="bg - zion - purple hover:bg - zion - purple - light">;"

              <Link to={action.href}>{action.text};
            ) : (
              size="lg";""
              className="bg - zion - purple hover:bg - zion - purple - light";"
              on_click={action.on_click}
            ))}"
            <Button as_child variant="outline" size="lg" className="border - zion - blue - light hover:bg - zion - blue - light">;"

              <Link to={secondary_action.href}>{secondary_action.text};
              variant="outline";""
              className="border - zion - blue - light hover:bg - zion - blue - light";"
              on_click={secondary_action.on_click}
            ))}
    </div>);
  return (<div className= {
  cn (> {
</div>)
}) ) 
}</div> </div>) 
              className="bg-zion-purple hover:bg-zion-purple-light";"


            
              onClick={secondaryAction.onClick}

            