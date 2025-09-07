

import { Card } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Sparkles, RefreshCcw } from "lucide-react","
export interface EmptyMatchesCardProps {
  // TODO: Implement
}
  onRefresh: () => void,
  isProcessing: boolean;
export interface EmptyMatchesCardProps {;

  onRefresh: () => void;,


export function EmptyMatchesCard(): any ({;
  onRefresh,;
  isProcessing,;)
}: EmptyMatchesCardProps) {;

  return ("
import { Card } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
import { Sparkles, RefreshCcw } from "lucide-react";"
)
export function EmptyMatchesCard({ onRefresh, isProcessing }: EmptyMatchesCardProps) {



    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">"
"
      <div className="mb-4 flex justify-center">"
</div>"
        <Sparkles className="h-12 w-12 text-muted-foreground" />"

      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>""
      <p className="text-muted-foreground mb-6">"
</p>
      <Button;
        onClick={onRefresh} 
        disabled={isProcessing}"
        className="mx-auto""
      >

          <>"
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />"

          </>)
        ) : (
            <Sparkles className="mr-2 h-4 w-4" />"

          </>


    <Card className="p-6 text-center border-dashed border-2 bg-muted/30">;"
      <div className="mb-4 flex justify-center">;"
        <Sparkles className="h-12 w-12 text-muted-foreground" />;"

      </div>;"
      <h3 className="text-lg font-medium mb-2">No talent matches yet</h3>;""
      <p className="text-muted-foreground mb-6">;"
      </p>;"
      <Button onClick={onRefresh} disabled={isProcessing} className="mx-auto">;"

          <>;"
            <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />;"

          </>;)
        ) :(;)
        ) : (;
            <Sparkles className="mr-2 h-4 w-4" />;"

        )}
      ;
    ;"
    <Card className="p - 6 text - center border - dashed border - 2 bg - muted / 30">;"
      <div className="mb - 4 flex justify - center">;"
        <Sparkles className="h - 12 w - 12 text - muted - foreground" />;"

      <h3 className="text - lg font - medium mb - 2">No talent matches yet</h3>;""
      <p className="text - muted - foreground mb - 6">;"
      <Button on_click={on_refresh} disabled={is_processing} className="mx - auto">;"

            <RefreshCcw className="mr - 2 h - 4 w - 4 animate - spin" />;"

          </>) : (
            <Sparkles className="mr - 2 h - 4 w - 4" />;"
          </>)}
    );"
  return (<Card className="p-6 text-center border-dashed border-2 bg-muted/30" > <div className="mb-4 flex justify-center" > <Sparkles className="h-12 w-12 text-muted-foreground" /> text-lg font-medium mb-2">No talent matches yet</h3> <p className=" text-muted-foreground mb-6"> Run AI matching to find talents that match this job's requirements. </p> <Button onClick= {
  isProcessing ? (<> <RefreshCcw className=" mr-2 h-4 w-4 animate-spin"/> Processing... </>) : (<> <Sparkles className=" mr-2 h-4 w-4" /> Find AI Matches </>)"

} ) 