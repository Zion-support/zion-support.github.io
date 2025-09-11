import {TalentCard} from "../../components/talent/TalentCard";
import {TalentSkeleton} from "../../components/talent/TalentSkeleton";
export function TalentGrid($1) {// // // // // // // }
    };
    const handleMessageInternal = (props) => {
        if (handleMessage) {
            handleMessage(talent);
        else {
            onTalentClick(talent.id);
    };
    if (isLoading) {
        return <TalentSkeleton  />;
    const handleMessageInternal = (props) => {
        if (handleMessage) {
            handleMessage(talent)}
        else {onTalentClick(talent.id)}
    };
    if (isLoading) {return <TalentSkeleton  />}
    if (!talents || talents.length === 0) {
        return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (<button onClick={clearFilters} className="px-4 py-2 bg-zion-purple text-white rounded "hover": bg-zion-purple-dark transition-colors">
          Clear Filters
        </button>)}
    </div>}
    return (
    <div className="min-h-screen bg-white">
      {talents.map((talent) => (<TalentCard key={talent.id} talent={talent} onMessage={() => handleMessageInternal(talent)} onBook={() => handleBookInternal(talent)} isAuthenticated={isAuthenticated}/>))}
        </div>
  );
}
export default TalentGrid;
</TalentCard>;
import {TalentCard} from "../../components/talent/TalentCard"; import {TalentSkeleton} from "../../components/talent/TalentSkeleton"; export function TalentGrid($1) { }; const handleMessageInternal = (props) => { if (handleMessage) { handleMessage(talent); else { onTalentClick(talent.id)}; if (isLoading) { return <TalentSkeleton />; const handleMessageInternal = (props) => { if (handleMessage) { handleMessage(talent)} else {onTalentClick(talent.id)} };; if (isLoading) {return <TalentSkeleton />} if (!talents || talents.length === 0) { return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6"> <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p> {clearFilters && (<button onClick={clearFilters} className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors"> Clear Filters </button>)} </div>} return ( <div className="min-h-screen bg-white"> {talents.map((talent) => (<TalentCard key={talent.id} talent={talent} onMessage={() => handleMessageInternal(talent)} onBook={() => handleBookInternal(talent)} isAuthenticated={isAuthenticated}/>))} </div> )} export default TalentGrid; </TalentCard>;
