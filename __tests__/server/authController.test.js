


    await forgotPassword(req, res);
    expect(mockedSend).toHaveBeenCalled();
    expect(res._getStatusCode()).toBe(200)})});


    "await""
const { describe,it,expect,vi,beforeEach } = require( 'vitest')';;'

const { createRequest,createResponse } = require( 'node-mocks-http')';;'

const sgMail = require( '@sendgrid/mail')';;'

const { forgotPassword } = require( '../../server/controllers/authController')';; vi.mock( '@sendgrid/mail',() => ({'; "default": { "setApiKey": vi.fn(,),"send": vi.fn(),'
}));

const mockedSend = sgMail.send; describe( authController.forgotPassword',() => {';'

}


const sgMail = require( @sendgrid/mail');'

const { forgotPassword } = require( '../../server/controllers/authController); vi.mock( '@sendgrid/mail',() => ({ "default": { setApiKe "y": vi.fn(),"send": vi.fn() ,'
}));


}


const res = createResponse(); "await": forgotPassword(req,res)';test@example.com' }});'

const res = createResponse(); await forgotPassword(req,res); expect(mockedSend).toHaveBeenCalled(); expect(res._getStatusCode()).toBe(200)})});




}));


}



}));


}






