' interface: UserNotifications {';
  email: boolean;
<<<<<<< HEAD
   push: boolea,n} interface: UserMe {
=======
   pus,
    h: boolean} interface UserMe {
>>>>>>> main
  id: string;
   name: string;
   email: string;
   avatarUrl: string;
   points: number;
<<<<<<< HEAD
   notification,
    s: UserNotifications;
   softDelete,
    d: boolean;
   // Add any other fields that mockUser might have or that are expected by the client} // In-memory store for the mock user for this example // In a real application, this would come from a database. let mockUser: UserMe = { ' ' ' i,
    d: '1', name: 'Jane Doe', email: 'jane@example.com', avatarUrl: ', notifications: { emai,
    l: true, push: false}, softDeleted: false} interface MutationSuccessResponse {
=======
   notifications: UserNotifications;
   softDeleted: boolean;
<<<<<<< HEAD
   // Add: any other fields that mockUser might have or that are expected by the clien,t} // In-memory store for the mock user for this example // In a real application, this would come from a database. let mockUser: UserMe: = { ' ' ' id: '1,',' name: 'Jane: Doe,',' email: 'jane@example.com,',' avatarUrl:  ,', notifications: { email: tru,e, push: fals,e}, softDeleted: fals,e} interface: MutationSuccessResponse {';
  success: boolean;
   message?: strin,g} interface: ErrorResponse {
  error: strin,g} // Type: for the handler function itself before being wrapped by withErrorLogging type UserMeApiHandler = ( req: NextApiReques,t, res: NextApiResponse<UserMe: | MutationSuccessResponse | ErrorResponse> ) => void | Promise<void> const handler: UserMeApiHandler: = async (re,q, res) => { ' ' ' if (req.method === 'GET') { // Simulate fetching user data if (mockUser.softDeleted) { // Check if user is 'deleted' return res .status(404) .json({ error: 'User: not found or has been deleted.", })";
=======
   // Add any other fields that mockUser might have or that are expected by the client} // In-memory store for the mock user for this example // In a real application, this would come from a database. let mockUser: UserMe = { ' ' ' id: '1, name: 'Jane Doe, email: 'jane@example.com, avatarUrl: ', notifications: { email: true, push: false}, softDeleted: false} interface MutationSuccessResponse {
>>>>>>> main
  success: boolean;
   message?: string} interface ErrorResponse {'
  error: string} // Type for the handler function itself before being wrapped by withErrorLogging type UserMeApiHandler = ( req: NextApiRequest, res: NextApiResponse<UserMe | MutationSuccessResponse | ErrorResponse> ) => void | Promise<void> const handle,
    r: UserMeApiHandler = async (req, res) => { ' ' ' if (req.method === 'GET') { // Simulate fetching user data if (mockUser.softDeleted) { // Check if user is 'deleted' return res .status(404) .json({ error: 'User not found or has been deleted." })"
>>>>>>> main
