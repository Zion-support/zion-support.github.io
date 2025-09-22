
<<<<<<< HEAD
;
interface SaveTalentButtonProps {;
  talentId:string,;
  onSave:(talentId:string) => void,;
  isSaved:boolean;
}
;
export function SaveTalentButton({ talentId, onSave, isSaved } SaveTalentButtonProps) {;
  return (;
    <Button;
      onClick={() => onSave(talentId)}
      variant={isSaved ? "default" :"outline"}
      size="sm";
      className={isSaved ? "bg-yellow-500 hover:bg-yellow-600 text-white" :"text-yellow-500 border-yellow-500 hover:bg-yellow-500/10"}
    >;
      <Star className={`h-4 w-4 ${isSaved ? 'fill-current' :''} mr-1`} />;
      {isSaved ? 'Saved' :'Save'}
    </Button>;
  ),;}
interface SaveTalentButtonProps {
  talentId: string;
onSave: (talentId: string) => void;
isSaved: boolean 
}talentId, onSave, isSaved 
}: SaveTalentButtonProps) {
  return (<Button onClick= {
  () => onSave (talentId) 
}> <Star className= {
  `h-4 w-4 $ {
  isSaved ? 'fill-current' : '' 
}mr-1` 
}/> {
  isSaved ? 'Saved': 'Save' 
}</Button>) 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
