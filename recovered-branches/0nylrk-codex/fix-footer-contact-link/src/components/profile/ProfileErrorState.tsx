import React from "react";""
import { Button } from "@/components/ui/button";""
import { Link } from "react-router-dom";""
import { ArrowLeft } from "lucide-react";"
interface ProfileErrorStateProps {
  // TODO: Implement
}
  error: string | null;
export function ProfileErrorState({ error }: ProfileErrorStateProps) {
  return ("
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">"
</div>"
      <div className="text-red-400 mb-4 text-xl">"
</div>
      <Button asChild>

        <Link;"
          to="/talents"""
          className="bg-zion-purple hover: bg-zion-purple-dark""
        >
"
          <ArrowLeft className="mr-2 h-4 w-4" />"

        
      
    <div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4">;"
      <div className="text-red-400 mb-4 text-xl">{error || "Something went wrong"}</div>;"
      <Button asChild>;
        <Link to="/talents" className="bg-zion-purple hover: bg-zion-purple-dark">;"
        <Link to="/talents" className="bg-zion-purple hover:bg-zion-purple-dark">;"
          <ArrowLeft className="mr-2 h-4 w-4" />;"

        ;
    </div>;"
    <div className="min - h-screen bg - zion - blue flex flex - col justify - center items - center p - 4">;"
      <div className="text - red - 400 mb - 4 text - xl">;"
      </div>;
      <Button as_child>;

          to="/talents";""
          className="bg - zion - purple hover: bg - zion - purple - dark";"
        >;
          <ArrowLeft className="mr - 2 h - 4 w - 4" />;"

      ;)
    </div>);"
  return (<div className="min-h-screen bg-zion-blue flex flex-col justify-center items-center p-4" > <div className="text-red-400 mb-4 text-xl" > {"
}</div> )"