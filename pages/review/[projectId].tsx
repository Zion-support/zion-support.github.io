 const ReviewSubmitPage: NextPage<Props> = ({
  projectId, fromRole, fromId, valid, reason 
}) => {
  if (!valid) {
  return (<main className="max-w-2xl mx-auto p-6" > <h1 className="text-2xl font-semibold mb-3" >Review unavailable</h1> <p className="text-sm text-gray-600" > {
  reason || 'You cannot submit a review for this project.' 
}</p> </main>) 
}return (</main>) 
};
export default ReviewSubmitPage;
