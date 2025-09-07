<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { "status": "vi.Mock<[number] MockApiResponse> "json": vi.Mock<[unknown] MockApiResponse> "setHeader": vi.Mock<[string",string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": "string",body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {}} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn()" res.end = vi.fn()" return res as MockApiRespons,"
}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": "true" },;"
})'"'";"
import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> "json": vi.Mock<[unknown] MockApiResponse> "setHeader": vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn()' res.end = vi.fn()' return res as MockApiResponse}' test('GET returns profile',() => {' const req = mockReq( 'GET')' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {' const req = mockReq( 'DELETE')' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })})const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { "status": "vi.Mock<[number] MockApiResponse> "json": vi.Mock<[unknown] MockApiResponse> "setHeader": vi.Mock<[string",string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": "string",body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn()" res.end = vi.fn()" return res as MockApiRespons,"
}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'"'";"
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'";"
ursor/fix-website-loading-errors-and-merge-6662;

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'";"

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'"'";"
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'";"
ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'";"

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'"'";"
ursor/add-new-services-and-deploy-updates-0462;
ursor/integrate-build-improve-and-re-verify-8f7d;

}" test("GET;"
  returns profile"",() => {" const req = mockReq( "GET")" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE")";"
}
})'";"
import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> "json": vi.Mock<[unknown] MockApiResponse> "setHeader": vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn();' res.end = vi.fn()' return res as MockApiResponse}' test('GET;'
  returns profile',() => {';'
  }
  const req = mockReq( 'GET');' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {';'
}
const req = mockReq( 'DELETE');' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })});'




const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { "status": "vi.Mock<[number] MockApiResponse> "json": vi.Mock<[unknown] MockApiResponse> "setHeader": vi.Mock<[string",string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": "string",body?: unknown): NextApiRequest {;"
}
return { method body "headers": {} "query": {} "cookies": {} as NextApiReques,;
} function mockRes(): MockApiResponse {;
}
const "res": Partial<MockApiResponse> = ,;
} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET;"
  returns profile"",() => {";"
}
const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": "jane@example.com,","points": expect.any(Number)}),;"
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {";"
}
const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": "true" },;"
})'"'""

}
return { method body "headers": {} "query": {} "cookies": {} as NextApiReques,;
} function mockRes(): MockApiResponse {;
}
} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET;"
  returns profile"",() => {";"
}
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {";"
}
})'""

}
return { method body "headers": {} "query": {} "cookies": {} as NextApiReques,;
} function mockRes(): MockApiResponse {;
}
} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET;"
  returns profile"",() => {";"
}
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {";"
}
})'""
}
return { method body "headers": {} "query": {} "cookies": {} as NextApiReques,;
} function mockRes(): MockApiResponse {;
}
} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET;"
  returns profile"",() => {";"
}
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {";"
}
})'"'""
ursor/add-new-services-and-deploy-updates-0462,
ursor/integrate-build-improve-and-re-verify-8f7d,
}
return { method body "headers": {} "query": {} "cookies": {} as NextApiReques,;
} function mockRes(): MockApiResponse {;
}
} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET;"
  returns profile"",() => {";"
}
}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ "name": "New,"
})" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": "New" }),"
})" test( "DELETE soft deletes account",() => {";"
}
})'""
=======
import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {}} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn();' res.end = vi.fn()' return res as MockApiResponse}' test('GET returns profile',() => {' const req = mockReq( 'GET');' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {' const req = mockReq( 'DELETE');' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })})

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'"'"

const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'"
const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'"'"
import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {}} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn();' res.end = vi.fn()' return res as MockApiResponse}' test('GET returns profile',() => {' const req = mockReq( 'GET');' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {' const req = mockReq( 'DELETE');' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })})
import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {}} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn();' res.end = vi.fn()' return res as MockApiResponse}' test('GET returns profile',() => {' const req = mockReq( 'GET');' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {' const req = mockReq( 'DELETE');' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })})
ursor/add-new-services-and-deploy-updates-0462
ursor/integrate-build-improve-and-re-verify-8f7d
const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'"
<<<<<<< HEAD
import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {}} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn();' res.end = vi.fn()' return res as MockApiResponse}' test('GET returns profile',() => {' const req = mockReq( 'GET');' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {' const req = mockReq( 'DELETE');' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })})

const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'"'""
"
const { expect,test,vi } from "vitest" import handler from "@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from "next interface MockApiResponse extends NextApiResponse { status: "vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string",string | string[]] void> end: vi.Mock<[(cb?: () => void) => void],void>} function mockReq(method: "string",body?: unknown): NextApiRequest { return { method body headers: {} query: {} cookies: {}} as NextApiRequest} function mockRes(): MockApiResponse { const res: Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as MockApiResponse) res.json = vi.fn().mockReturnValue(res as MockApiResponse) res.setHeader = vi.fn();" res.end = vi.fn()" return res as MockApiResponse}" test("GET returns profile"",() => {" const req = mockReq( "GET");" const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ email: "jane@example.com,",points: expect.any(Number)}))}) test("PUT updates profile"",() => {" const req = mockReq( "PUT",{ name: "New })" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ name: "New" }))})" test( "DELETE soft deletes account",() => {" const req = mockReq( "DELETE");" const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ success: "true" })})'""

import { expect,test,vi } from 'vitest" import handler from '@/pages/api/users/me" import type { NextApiRequest,NextApiResponse } from 'next interface MockApiResponse extends NextApiResponse { "status": 'vi.Mock<[number] MockApiResponse> json: vi.Mock<[unknown] MockApiResponse> setHeader: vi.Mock<[string,string | string[]] void> "end": vi.Mock<[(cb?: () => void) => void],void>} function mockReq("method": 'string',body?: unknown): NextApiRequest { return { method body "headers": {} "query": {} "cookies": {}} as NextApiRequest} function mockRes(): MockApiResponse { const "res": Partial<MockApiResponse> = {} res.status = vi.fn().mockReturnValue(res as, MockApiResponse) res.json = vi.fn().mockReturnValue(res as, MockApiResponse) res.setHeader = vi.fn();' res.end = vi.fn()' return res as MockApiResponse}' test('GET returns profile',() => {' const req = mockReq( 'GET');' const res = mockRes() handler(req,res) expect(res.status).toHaveBeenCalledWith(200) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "email": 'jane@example.com,',"points": expect.any(Number)}))}) test('PUT updates profile',() => {' const req = mockReq( 'PUT',{ "name": 'New })' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith( expect.objectContaining({ "name": 'New' }))})' test( 'DELETE soft deletes account',() => {' const req = mockReq( 'DELETE');' const res = mockRes() handler(req,res) expect(res.json).toHaveBeenCalledWith({ "success": 'true' })})
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
import { expect, test, vi } from 'vitest';
import handler from '@/pages/api/users/me';
import type { NextApiRequest, NextApiResponse } from 'next';
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
>>>>>>> pr/11282

interface MockApiResponse extends NextApiResponse {
  status: vi.Mock<[number], MockApiResponse>;
  json: vi.Mock<[unknown], MockApiResponse>;
  setHeader: vi.Mock<[string, string | string[]], void>;
  end: vi.Mock<[(cb?: () => void) => void], void>;
}

function mockReq(method: string, body?: unknown): NextApiRequest {
  return {
    method,
    body,
    headers: {},
    query: {},
<<<<<<< HEAD
    cookies: {}
=======
    cookies: {},
>>>>>>> pr/11282
  } as NextApiRequest;
}

function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {};
  res.status = vi.fn().mockReturnValue(res as MockApiResponse);
  res.json = vi.fn().mockReturnValue(res as MockApiResponse);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res as MockApiResponse;
}

test('GET returns profile', () => {
  const req = mockReq('GET');
  const res = mockRes();
  handler(req, res);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
      email: 'jane@example.com',
<<<<<<< HEAD
      points: expect.any(Number)
=======
      points: expect.any(Number),
>>>>>>> pr/11282
    })
  );
});

test('PUT updates profile', () => {
  const req = mockReq('PUT', { name: 'New Name' });
  const res = mockRes();
  handler(req, res);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({
<<<<<<< HEAD
      name: 'New Name'
=======
      name: 'New Name',
>>>>>>> pr/11282
    })
  );
});

test('DELETE soft deletes account', () => {
  const req = mockReq('DELETE');
  const res = mockRes();
  handler(req, res);
  expect(res.json).toHaveBeenCalledWith({ success: true });
<<<<<<< HEAD
});
<<<<<<< HEAD
>>>>>>> origin/main
=======
<<<<<<< HEAD
>>>>>>> pr/11282
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
=======
});
>>>>>>> cb8cfb4fb3d771dc157162ef9d8670f2dbe493da
